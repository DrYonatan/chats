"use client";

import { getChatById } from "@/app/api/chats";
import { Chat } from "@/app/types/chat";
import MessageComponent from "@/app/ui/message-component";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatBox() {
  const params = useParams();
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    getChatById(params.chatId!.toString()).then((data) => {
      if (data != null) setChat(data);
    });
  }, []);

  return (
    <div className="flex grow flex-col-reverse justify-start h-full">
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
