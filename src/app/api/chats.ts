import { fetchChats } from "../lib/chats";
import { Chat } from "../types/chat";

export const getChats = async (): Promise<Chat[]> => {
  try {
    const response = await fetchChats();
    console.log(response);
    return response;
  } catch (error) {
    return [];
  }
};
