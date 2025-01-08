"use client";
import { createChat } from "../api/chats";
import { chats } from "../temp/chats";

export default function AddChatButton() {
  const onClickHandler = () => {
    createChat(chats[0]);
  };
  return (
    <button
      onClick={onClickHandler}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded h-10 w-10"
    >
      +
    </button>
  );
}
