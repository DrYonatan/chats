import { Suspense } from "react";
import ChatsList from "./chats-list";
import ChatsLoading from "./chats-loading";
import AddChatButton from "./add-chat-button";

export default function ChatsBar() {
  return (
    <div className="flex flex-col h-screen px-3 md:px-2">
      <aside
        id="sidebar-multi-level-sidebar"
        className="z-40 w-60  transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                fontFamily: "initial",
                fontWeight: "bolder",
              }}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group ms-3"
            >
              Chats
            </span>
            <AddChatButton />
          </div>

          <Suspense fallback={<ChatsLoading />}>
            <ChatsList />
          </Suspense>
        </div>
      </aside>
    </div>
  );
}
