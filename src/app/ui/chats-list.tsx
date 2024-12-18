import { GroupChat } from "../types/group-chat";
import { Chat } from "../types/chat";
import { getChats } from "../api/chats";

export default async function ChatsList() {
  const chats: Chat[] = await getChats();

  return (
    <ul className="space-y-2 font-medium">
      <div className="grid grid-cols-1 divide-y">
        {chats.map((chat) => (
          <li key={chat.id}>
            <a
              href={chat.id}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img
                style={{ borderRadius: "100%", height: "50px" }}
                src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                alt="User"
              />
              <span className="flex-1 ms-3 whitespace-nowrap">
                {chat instanceof GroupChat
                  ? chat.groupName
                  : chat.participantsIds[1]}
              </span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </a>
          </li>
        ))}
      </div>
    </ul>
  );
}
