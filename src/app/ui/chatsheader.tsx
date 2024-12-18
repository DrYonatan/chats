export default function ChatsHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "30px",
        zIndex: "2",
      }}
      className="bg-gray-100 border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-800 shadow-2xl shadow-blue-300 dark:shadow-black"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          style={{ height: "60px" }}
          src="https://cdn6.aptoide.com/imgs/1/2/2/1221bc0bdd2354b42b293317ff2adbcf_icon.png"
        ></img>
        <span
          className="dark:text-white"
          style={{
            fontSize: "30px",
            fontFamily: "initial",
            fontWeight: "bolder",
            width: "300px",
          }}
        >
          Group Name
        </span>
      </div>
    </div>
  );
}
