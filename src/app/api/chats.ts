import { addMessage, fetchChatById, fetchChats, saveChat } from "../lib/chats";
import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { Message } from "../types/message";

export const getChats = async (): Promise<Chat[]> => {
  const response = await fetchChats();
  return response;
};

export const getChatById = async (
  chatId: string
): Promise<Chat | null | undefined> => {
  const response = await fetchChatById(chatId);
  return response;
};

export const createChat = async (chat: Chat): Promise<void> => {
  saveChat(
    chat.id!,
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

export const sendMessage = async (
  chat: Chat,
  message: Message
): Promise<void> => {
  addMessage(chat.id!, message);
};
