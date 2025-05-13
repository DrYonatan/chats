import { fetchChats } from "../../lib/chats";
import ChatsBar from "../../ui/chatsbar";
import ChatsHeader from "../../ui/chatsheader";
import SendIconComponent from "../../ui/send-icon";
import TextFieldComponent from "../../ui/text-field";

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
        <main className="w-full h-full bg-blue-100 dark:bg-gray-900">{children}</main>
        <div className="bg-gray-100 border-gray-200 px-4 py-4 dark:bg-gray-800 flex gap-2 items-center">
          <TextFieldComponent />
          <SendIconComponent />
        </div>
      </div>
    </div>
  );
}
