import ChatsBar from "../ui/chatsbar";
import ChatsHeader from "../ui/chatsheader";
import MessageComponent from "../ui/message-component";
import { messages } from "../temp/messages";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Page() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ChatsBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ChatsHeader />
        <div
          className="bg-blue-100 dark:bg-gray-900"
          style={{
            display: "flex",
            flexGrow: "20",
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
          }}
        >
          {messages.map((message) => (
            <MessageComponent
              key={message.id}
              id={message.id}
              text={message.text}
              sender={message.sender}
            />
          ))}
        </div>
        <div
          style={{ height: "100px" }}
          className="bg-gray-100 border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-800"
        >
          <TextField
            id="outlined-basic"
            label="Write your message"
            variant="outlined"
            sx={{ width: "95%" }}
          />
          <SendIcon
            sx={{ height: "40px", width: "40px", paddingTop: "10px" }}
            className="hover:text-blue-700 cursor-pointer dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}
