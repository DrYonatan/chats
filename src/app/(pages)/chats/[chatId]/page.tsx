"use client";

import { getChatById, sendMessage } from "@/app/api/chats";
import { users } from "@/app/temp/users";
import { Chat } from "@/app/types/chat";
import { Message } from "@/app/types/message";
import MessageComponent from "@/app/ui/message-component";
import SendIconComponent from "@/app/ui/send-icon";
import TextFieldComponent from "@/app/ui/text-field";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatBox() {
  const params = useParams();
  const [chat, setChat] = useState<Chat>();

  const [messageText, setMessageText] = useState<string>();

  useEffect(() => {
    getChatById(params.chatId!.toString()).then((data) => {
      if (data != null) setChat(data);
    });
  }, []);

  const submitMessage = () => {
    let messageToSend: Message;
    if (messageText) {
      messageToSend = {
        text: messageText,
        sendTime: new Date(Date.now()),
        sender: users[0],
      };

      sendMessage(chat!, messageToSend);
      setChat((prevChat) => {
        if (!prevChat) return prevChat;

        return {
          ...prevChat,
          messages: [messageToSend, ...(prevChat.messages ?? [])], // ✅ safe fallback
        };
      });
    }
  };

  return (
    <div className="flex grow h-full flex-col">
      <div className="flex grow h-full flex-col-reverse justify-start">
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
      <div className="bg-gray-100 border-gray-200 px-4 py-4 dark:bg-gray-800 flex gap-2 items-center">
        <TextFieldComponent setMessageText={setMessageText} />
        <button onClick={submitMessage}>
          <SendIconComponent />
        </button>
      </div>
    </div>
  );
}
