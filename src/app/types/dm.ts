import { Chat } from "./chat";
import { Message } from "./message";
import { User } from "./user";

export class DM implements Chat {
  id: string;
  messages: Message[];
  participants?: User[];

  constructor(id: string, participants: User[], messages: Message[]) {
    this.id = id;
    this.messages = messages;
    this.participants = participants;
  }
}
