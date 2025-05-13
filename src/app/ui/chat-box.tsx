import { Chat } from "../types/chat";
import MessageComponent from "./message-component";

type Props = {
  chat: Chat | undefined;
};

export default function ChatBox({ chat }: Props) {
  return (
    <div className="bg-blue-100 dark:bg-gray-900 flex grow flex-col-reverse justify-start h-full">
      {chat?.messages.map((message) => {
        return (
          <MessageComponent
            key={message.id}
            id={message.id}
            text={message.text}
            sendTime={message.sendTime}
            sender={message.sender}
          />
        );
      })}
    </div>
  );
}
