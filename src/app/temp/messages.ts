import { Message } from "../types/message";
import { User } from "../types/user";

const k_rool: User = {
  id: "user1",
  username: "K.Rool",
  profilepic: "",
  password: "World",
};
const donkey_kong: User = {
  id: "user2",
  username: "Donkey Kong",
  profilepic: "",
  password: "DK",
};

export const messages: Message[] = [
  {
    id: "message1",
    text: "You wouldn't drop coudln't drop, you wouldn't dare.",
    sender: donkey_kong,
  },

  {
    id: "message2",
    text: "Hold it now, Hold it now, Hold it, Hold it right there!",
    sender: donkey_kong,
  },

  {
    id: "message3",
    text: "Don't think I won't let little diddy drop!",
    sender: k_rool,
  },

  {
    id: "message4",
    text: "Lookie here, lookie here, look what I've got!",
    sender: k_rool,
  },
];
