"use client";

import { useCurrentUser } from "../contexts/UserContext";
import { Message } from "../types/message";

export default function MessageComponent({ text, sender, sendTime }: Message) {
  const time = new Date(sendTime);
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return null; // or a loading spinner
  }

  const isSender = currentUser.username == sender.username;

  return !isSender ? (
    <div className="bg-gray-300 dark:bg-gray-700 dark:text-white p-3 rounded-xl max-w-[80%] shadow-lg mb-4 self-start m-[10px]">
      <p className="text-s text-gray-500">{sender.username}</p>
      {text}
      <div className="self-end text-gray-500">
        {`${time.getHours()}:${
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        }`}
      </div>
    </div>
  ) : (
    <div className="self-end m-[10px] relative inline-block bg-blue-500 text-white dark:bg-blue-700 dark:text-white p-3 rounded-xl max-w-[80%] shadow-lg mb-4">
      {text}
      <div className="self-end text-blue-200">
        {`${time.getHours()}:${
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        }`}
      </div>
    </div>
  );
}
