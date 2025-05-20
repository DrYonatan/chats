import { User } from "../types/user";

const k_rool: User = {
  id: "user1",
  username: "K.Rool",
  email: "krool@gmail.com",
  profilepic: "",
  password: "World",
};
const donkey_kong: User = {
  id: "user2",
  username: "Donkey Kong",
  email: "donkey@gmail.com",
  profilepic: "",
  password: "DK",
};

export const users: User[] = [donkey_kong, k_rool];
