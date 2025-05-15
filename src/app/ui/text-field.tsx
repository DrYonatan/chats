"use client";

import { Dispatch, SetStateAction } from "react";

type props = {
  setMessageText: Dispatch<SetStateAction<string | undefined>>;
};

export default function TextFieldComponent({ setMessageText }: props) {
  return (
    <div className="flex grow">
      <input
        onChange={(e) => setMessageText(e.target.value)}
        type="text"
        id="default-input"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
