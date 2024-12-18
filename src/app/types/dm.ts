import { Chat } from "./chat";
import { Message } from "./message";

export class DM implements Chat {
  id: string;
  messages: Message[];
  participantsIds: string[];

  constructor(id: string, participantsIds: string[], messages: Message[]) {
    this.id = id;
    this.messages = messages;
    this.participantsIds = participantsIds;
  }
}
