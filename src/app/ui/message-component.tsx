"use client";

import { Message } from "../types/message";

export default function MessageComponent({ text, sender }: Message) {
  return sender.username != "Donkey Kong" ? (
    <div
      style={{ alignSelf: "flex-start", margin: "10px" }}
      className="message-bubble bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      <p style={{ fontSize: "12px", color: "gray" }}>{sender.username}</p>
      {text}
    </div>
  ) : (
    <div
      style={{ alignSelf: "flex-end", margin: "10px" }}
      className="relative inline-block bg-blue-500 text-white dark:bg-blue-700 dark:text-white p-3 rounded-xl max-w-[80%] shadow-lg mb-4"
    >
      {text}
    </div>
  );
}
