import { Chat } from "./chat";
import { Message } from "./message";

export class GroupChat implements Chat {
  id: string;
  groupName: string;
  picture: string;
  messages: Message[];
  participantsIds: string[];

  constructor(id: string, groupName: string, picture: string, messages: Message[], participantsIds: string[]) {
    this.id = id;
    this.groupName = groupName;
    this.picture = picture;
    this.messages = messages;
    this.participantsIds = participantsIds;
  }
}
