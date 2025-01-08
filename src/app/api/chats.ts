import { fetchChats, saveChat } from "../lib/chats";
import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { Message } from "../types/message";
import { User } from "../types/user";

export const getChats = async (): Promise<Chat[]> => {
  const response = await fetchChats();
  return response;
};

export const createChat = async (chat: Chat): Promise<void> => {
    saveChat(
    chat.id,
    chat instanceof DM ? "DM" : "GROUP",
    chat.messages.map((message) => ({
      id: message.id,
      text: message.text,
      sendTime: message.sendTime.getTime(),
      senderId: message.sender.id,
    })),
    chat.participants
      ? chat.participants.map((participant) => participant.id)
      : [],
    chat instanceof GroupChat ? chat.groupName : "",
    chat instanceof GroupChat ? chat.picture : ""
  );
};
