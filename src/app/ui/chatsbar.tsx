import { Suspense } from "react";
import ChatsList from "./chats-list";
import ChatsLoading from "./chats-loading";
import AddIcon from "@mui/icons-material/Add";

export default function ChatsBar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <aside
        id="sidebar-multi-level-sidebar"
        className="z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
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
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded h-10 w-10">
              <AddIcon />
            </button>
          </div>

          <Suspense fallback={<ChatsLoading />}>
            <ChatsList />
          </Suspense>
        </div>
      </aside>
    </div>
  );
}
