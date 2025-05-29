"use client";

import { getChatById, sendMessage } from "@/app/api/chats";
import { useCurrentUser } from "@/app/contexts/UserContext";
import { chats } from "@/app/temp/chats";
import { users } from "@/app/temp/users";
import { Chat } from "@/app/types/chat";
import { DM } from "@/app/types/dm";
import { GroupChat } from "@/app/types/group-chat";
import { Message } from "@/app/types/message";
import { User } from "@/app/types/user";
import ChatsHeader from "@/app/ui/chatsheader";
import ChatsHeaderLoading from "@/app/ui/chatsheader-loading";
import MessageComponent from "@/app/ui/message-component";
import SendIconComponent from "@/app/ui/send-icon";
import TextFieldComponent from "@/app/ui/text-field";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatBox() {
  const params = useParams();

  const user: User | null = useCurrentUser();

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
        sender: user!,
      };

      sendMessage(chat!, messageToSend);
      setMessageText("");
      setChat((prevChat) => {
        if (!prevChat) return prevChat;

        return {
          ...prevChat,
          messages: [messageToSend, ...(prevChat.messages ?? [])], // ✅ safe fallback
        };
      });
    }
  };

  return chat ? (
    <div className="flex grow h-full flex-col">
      <ChatsHeader currentChat={chat!} />

      <div className="flex grow h-full flex-col-reverse justify-start overflow-y-scroll">
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
        <TextFieldComponent
          messageText={messageText}
          setMessageText={setMessageText}
        />
        <button onClick={submitMessage}>
          <SendIconComponent />
        </button>
      </div>
    </div>
  ) : (
    <ChatsHeaderLoading />
  );
}
