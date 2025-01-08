import { Chat } from "./chat";
import { Message } from "./message";
import { User } from "./user";

export class GroupChat implements Chat {
  id: string;
  groupName: string;
  picture: string;
  messages: Message[];
  participants?: User[];

  constructor(id: string, groupName: string, picture: string, messages: Message[], participants: User[]) {
    this.id = id;
    this.groupName = groupName;
    this.picture = picture;
    this.messages = messages;
    this.participants = participants;
  }
}
