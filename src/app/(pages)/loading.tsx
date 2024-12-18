import ChatsBar from "../ui/chatsbar";
import ChatsHeader from "../ui/chatsheader";

export default function Page() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <ChatsBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <ChatsHeader />
        <div
          style={{
            backgroundColor: "#e1f5fa",
            display: "flex",
            flexGrow: "20",
            flexDirection: "column-reverse",
            justifyContent: "flex-start",
          }}
        ></div>
        <div
          style={{ height: "100px" }}
          className="bg-gray-100 border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-800"
        ></div>
      </div>
    </div>
  );
}
