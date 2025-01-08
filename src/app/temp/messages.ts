import { Message } from "../types/message";
import { users } from "./users";


export const messages: Message[] = [
  {
    id: "message1",
    text: "You wouldn't drop coudln't drop, you wouldn't dare.",
    sendTime: new Date("2016-01-04 10:34:25"),
    sender: users[0],
  },

  {
    id: "message2",
    text: "Hold it now, Hold it now, Hold it, Hold it right there!",
    sendTime: new Date("2016-01-04 10:34:23"),
    sender: users[0],
  },

  {
    id: "message3",
    text: "Don't think I won't let little diddy drop!",
    sendTime: new Date("2016-01-04 10:33:22"),
    sender: users[1],
  },

  {
    id: "message4",
    text: "Lookie here, lookie here, look what I've got!",
    sendTime: new Date("2016-01-04 10:33:20"),
    sender: users[1],
  },
];
