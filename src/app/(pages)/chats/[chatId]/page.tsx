"use client";

import { getChatById, sendMessage } from "@/app/api/chats";
import { getUserById } from "@/app/api/users";
import { useCurrentUser } from "@/app/contexts/UserContext";
import { database, ref } from "@/app/lib/firebase/firebase";
import { Chat } from "@/app/types/chat";
import { Message } from "@/app/types/message";
import { User } from "@/app/types/user";
import ChatsHeader from "@/app/ui/chatsheader";
import ChatsHeaderLoading from "@/app/ui/chatsheader-loading";
import MessageComponent from "@/app/ui/message-component";
import SendIconComponent from "@/app/ui/send-icon";
import TextFieldComponent from "@/app/ui/text-field";
import { off, onChildAdded } from "firebase/database";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatBox() {
  const params = useParams();

  const user: User | null = useCurrentUser();

  const [chat, setChat] = useState<Chat>();

  const [messages, setMessages] = useState<Message[]>();

  const [messageText, setMessageText] = useState<string>();

  useEffect(() => {
  const messagesRef = ref(database, `chats/${params.chatId}/messages`);

  let unsubscribed = false;

  const loadChat = async () => {
    const data = await getChatById(params.chatId!.toString());
    if (data != null && !unsubscribed) {
      setChat(data);
      setMessages(data.messages);

      const unsubscribe = onChildAdded(messagesRef, async (snapshot) => {
        const message = snapshot.val();

        const sender = await getUserById(message.senderId);

        setMessages((prev) => {
          if (!prev) return prev;

          const newMessage = {
            id: snapshot.key!,
            sendTime: message.sendTime,
            sender,
            text: message.text,
          };

          // Prevent duplicates
          if (prev.some((msg) => msg.id === newMessage.id)) {
            return prev;
          }

          return [newMessage, ...prev];
        });
      });

      // Save unsubscribe to cleanup
      cleanupFn = () => {
        off(messagesRef, "child_added", unsubscribe);
      };
    }
  };

  let cleanupFn: () => void = () => {};

  loadChat();

  return () => {
    unsubscribed = true;
    cleanupFn();
  };
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
      setMessages((prev) => {
        if (!prev) return prev;
        return [messageToSend, ...prev];
      });
    }
  };

  return chat ? (
    <div className="flex grow h-full flex-col">
      <ChatsHeader currentChat={chat!} />

      <div className="flex grow h-full flex-col-reverse justify-start overflow-y-scroll">
        {messages?.map((message) => {
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
