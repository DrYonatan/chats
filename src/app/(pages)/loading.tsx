import ChatsBar from "../ui/chatsbar";
import ChatsHeader from "../ui/chatsheader";

export default function Page() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <ChatsHeader />
        <div className="bg-sky-100 flex grow-20 flex-col-reverse justify-start"></div>
        <div className="bg-gray-100 border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-800"></div>
      </div>
    </div>
  );
}
