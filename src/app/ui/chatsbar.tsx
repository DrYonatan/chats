"use client";

import { Suspense } from "react";
import ChatsList from "./chats-list";
import ChatsLoading from "./chats-loading";
import AddChatButton from "./add-chat-button";
import { useCurrentUser } from "../contexts/UserContext";

export default function ChatsBar() {
  const user = useCurrentUser();

  return (
    <div className="flex flex-col h-screen px-3 md:px-2">
      <aside
        id="sidebar-multi-level-sidebar"
        className="z-40 w-60  transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ms-3 text-[30px] font-[initial] font-bold">
              Chats
            </span>
            <AddChatButton />
          </div>

          <Suspense fallback={<ChatsLoading />}>
            <ChatsList chats={user?.chats} />
          </Suspense>
        </div>
      </aside>
    </div>
  );
}
