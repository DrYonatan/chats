import { getUserbyId } from "../api/users";
import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { Message } from "../types/message";
import { User } from "../types/user";
import { database, onValue, ref, set } from "./firebase/firebase";

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
  return Promise.all(
    chatsDTO.map(async (chat) => {
      let res: Chat;

      // Group Chat type
      const participants = await Promise.all(
        chat.participantsIds.map(async (id: string) => await getUserbyId(id))
      );

      const messages = await Promise.all(
        chat.messages.map(async (message: any) => {
          const sender = await getUserbyId(message.senderId);
          return {
            id: message.id,
            sendTime: message.sendTime,
            text: message.text,
            sender: sender,
          };
        })
      );

      // Slice participants if necessary (e.g., remove the first participant)
      const groupParticipants = participants; // You can change the logic here if needed

      if (chat.type === "DM") {
        // Direct Message (DM) chat type
        res = new DM(chat.id, groupParticipants, messages);
      } else {
        res = new GroupChat(
          chat.id,
          chat.groupName,
          chat.picture,
          messages,
          groupParticipants
        );
      }
      console.log(res.participants);

      return res;
    })
  );
}
