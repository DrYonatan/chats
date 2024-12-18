import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { Message } from "../types/message";
import { database, onValue, ref } from "./firebase/firebase";

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

            const chats = parseChats(chatsDTO);

            resolve(chats);
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

function parseChats(
  chatsDTO: {
    id: string;
    messages: any;
    participantsIds: any;
    type: any;
    groupName: any;
    picture: any;
  }[]
): Chat[] {
  return chatsDTO.map((chat) =>
    chat.type === "DM"
      ? new DM(chat.id, chat.participantsIds, chat.messages)
      : new GroupChat(
          chat.id,
          chat.groupName,
          chat.picture,
          chat.messages,
          chat.participantsIds
        )
  );
}
