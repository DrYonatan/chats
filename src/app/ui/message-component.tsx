import { Message } from "../types/message";

export default function MessageComponent({ text, sender, sendTime }: Message) {
  const time = new Date(sendTime);
  return sender.username != "DonkeyKong" ? (
    <div
      style={{ alignSelf: "flex-start", margin: "10px" }}
      className="bg-gray-300 dark:bg-gray-700 dark:text-white p-3 rounded-xl max-w-[80%] shadow-lg mb-4"
    >
      <p style={{ fontSize: "12px", color: "gray" }}>{sender.username}</p>
      {text}
      <div style={{alignSelf: "flex-end", color: "gray"}}>
        {`${time.getHours()}:${time.getMinutes()}`}
      </div>
    </div>
  ) : (
    <div
      style={{ alignSelf: "flex-end", margin: "10px" }}
      className="relative inline-block bg-blue-500 text-white dark:bg-blue-700 dark:text-white p-3 rounded-xl max-w-[80%] shadow-lg mb-4"
    >
      {text}
      <div style={{alignSelf: "flex-end", color: "lightblue"}}>
        {`${time.getHours()}:${time.getMinutes()}`}
      </div>
    </div>
  );
}
