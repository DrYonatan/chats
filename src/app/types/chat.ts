import { Message } from "./message";
import { User } from "./user";

export interface Chat {
  id: string;
  messages: Message[];
  participants?: User[];
}
