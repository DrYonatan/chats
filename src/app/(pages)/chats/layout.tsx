import { fetchChats } from "../../lib/chats";
import ChatsBar from "../../ui/chatsbar";
import ChatsHeader from "../../ui/chatsheader";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chats = await fetchChats();

  return (
    <div className="flex w-full">
      <ChatsBar />
      <div className="flex flex-col w-full">
        <main className="w-full h-full bg-blue-100 dark:bg-gray-900 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
