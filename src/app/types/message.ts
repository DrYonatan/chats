import { User } from "./user";

export interface Message {
  id?: string;
  text: string;
  sendTime: Date;
  sender: User;
}
