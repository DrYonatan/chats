export default function ChatsHeaderLoading() {
  return (
    <div className="bg-gray-100 border-gray-200 px-4 h-20 lg:px-6 py-2.5 dark:bg-gray-800 shadow-2xl shadow-blue-300 dark:shadow-black flex justify-between items-center pl-2 z-10">
      <div className="flex items-center gap-[10px]">
        <img
          className="h-[60px]"
          src="https://cdn.pixabay.com/photo/2016/11/14/17/39/group-1824145_1280.png"
        ></img>
        <span className="dark:text-white text-[30px] font-[initial] font-bold w-[300px]"></span>
      </div>
    </div>
  );
}
