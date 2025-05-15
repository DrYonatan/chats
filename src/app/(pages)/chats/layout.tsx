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
      <ChatsBar chats={chats} />
      <div className="flex flex-col w-full">
        <ChatsHeader />
        <main className="w-full h-full bg-blue-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}
