"use client";

import { Dispatch, SetStateAction } from "react";

type props = {
  messageText: string | undefined;
  setMessageText: Dispatch<SetStateAction<string>>;
};

export default function TextFieldComponent({
  messageText,
  setMessageText,
}: props) {
  return (
    <div className="flex grow">
      <input
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        type="text"
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
