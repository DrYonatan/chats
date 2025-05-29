import { Chat } from "./chat";

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
  profilepic: string;
  chats?: Chat[];
}
