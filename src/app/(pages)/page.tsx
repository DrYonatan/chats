import ChatsBar from "../ui/chatsbar";
import ChatsHeader from "../ui/chatsheader";
import MessageComponent from "../ui/message-component";
import { messages } from "../temp/messages";
import TextFieldComponent from "../ui/text-field";
import { getChats } from "../api/chats";
import { Chat } from "../types/chat";
import SendIconComponent from "../ui/send-icon";
import { users } from "../temp/users";

export default async function Page() {
  const chats: Chat[] = await getChats();
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ChatsBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ChatsHeader />
        <div
          className="bg-blue-100 dark:bg-gray-900"
          style={{
            display: "flex",
            flexGrow: "1",
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
          }}
        >
          {chats[0].messages.map((message) => {
            console.log("Sender: " + message.sender.username);
            return (
              <MessageComponent
                key={message.id}
                id={message.id}
                text={message.text}
                sendTime={message.sendTime}
                sender={message.sender}
              />
            );
          })}
        </div>
        <div
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
          className="bg-gray-100 border-gray-200 px-4 py-4 dark:bg-gray-800"
        >
          <TextFieldComponent />
          <SendIconComponent />
        </div>
      </div>
    </div>
  );
}
