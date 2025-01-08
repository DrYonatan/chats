import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { messages } from "./messages";
import { users } from "./users";

export const chats: Chat[] = [
  new DM("group1", [users[0], users[1]], messages),
  new GroupChat("group2", "Kongs", "", messages, [users[0], users[1]]),
];
