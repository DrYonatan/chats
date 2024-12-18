import { Chat } from "../types/chat";
import { DM } from "../types/dm";
import { GroupChat } from "../types/group-chat";
import { Message } from "../types/message";
import { User } from "../types/user";
import { messages } from "./messages";

const users: User[] = [
  { id: "1", username: "K.rool", profilepic: "", password: "Shalos" },
  { id: "2", username: "Donkey Kong", profilepic: "", password: "Shalos" },
];

export const chats: Chat[] = [
  new DM("group1", ["1", "2"], messages),
  new GroupChat("group2", "Kongs", "", messages, ["1", "2"]),
];
