import { getUserbyId } from "../api/users";
import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { Message } from "../types/message";
import { User } from "../types/user";
import { database, get, onValue, ref, set } from "./firebase/firebase";

export const fetchChats = async (): Promise<Chat[]> => {
  try {
    const chatsRef = ref(database, "chats");

    return new Promise<Chat[]>((resolve, reject) => {
      onValue(
        chatsRef,
        (snapshot) => {
          const data = snapshot.val();

          if (data) {
            const chatsDTO = Object.keys(data).map((key) => ({
              id: key,
              messages: data[key].messages,
              participantsIds: data[key].participantsIds,
              type: data[key].type,
              groupName: data[key].groupName,
              picture: data[key].picture,
            }));

            parseChats(chatsDTO).then((chats) => {
              resolve(chats);
            });
          } else {
            resolve([]);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  } catch (error) {
    return [];
  }
};

export const fetchChatById = async (
  chatId: string
): Promise<Chat | null | undefined> => {
  try {
    const chatRef = ref(database, `chats/${chatId}`);
    const snapshot = await get(chatRef);

    if (!snapshot.exists()) {
      return null;
    }

    let res;
    const data = snapshot.val();
    res = parseChat(data);

    return res;
  } catch (error) {}
};

export const saveChat = async (
  chatId: string,
  type: string,
  messages: any,
  participantsIds: string[],
  groupName: string,
  picture: string
): Promise<void> => {
  try {
    const chatRef = ref(database, `chats/${chatId}`);
    if (type === "DM") {
      set(chatRef, {
        messages: messages,
        participantsIds: participantsIds,
        type: type,
      });
    } else if (type === "GROUP") {
      set(chatRef, {
        groupName: groupName,
        messages: messages,
        participantsIds: participantsIds,
        picture: picture,
        type: type,
      });
    }
  } catch (error) {
    console.error("An Error has occured: " + error);
  }
};

async function parseChats(
  chatsDTO: {
    id: string;
    messages: any;
    participantsIds: any;
    type: any;
    groupName: any;
    picture: any;
  }[]
): Promise<Chat[]> {
  return Promise.all(chatsDTO.map(async (chat) => parseChat(chat)));
}

async function parseChat(chatDTO: {
  id: string;
  messages: any;
  participantsIds: any;
  type: any;
  groupName: any;
  picture: any;
}) {
  let res: Chat;

  // Group Chat type
  const participants = await Promise.all(
    chatDTO.participantsIds.map(async (id: string) => await getUserbyId(id))
  );

  const messages = await Promise.all(
    chatDTO.messages.map(async (message: any) => {
      const sender = await getUserbyId(message.senderId);
      return {
        id: message.id,
        sendTime: message.sendTime,
        text: message.text,
        sender: sender,
      };
    })
  );

  if (chatDTO.type === "DM") {
    // Direct Message (DM) chat type
    res = new DM(chatDTO.id, participants, messages);
  } else {
    res = new GroupChat(
      chatDTO.id,
      chatDTO.groupName,
      chatDTO.picture,
      messages,
      participants
    );
  }

  return res;
}
