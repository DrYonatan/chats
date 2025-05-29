"use client";

import { useCurrentUser } from "@/app/contexts/UserContext";
import { logOut } from "@/app/lib/firebase/auth";
import { User } from "@/app/types/user";
import { useState } from "react";

export default function Page() {
  const user: User | null = useCurrentUser();
  const [username, setUsername] = useState<string>(user ? user.username : "");

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center w-full h-full">
      <div className="flex flex-col items-center p-10 gap-10 bg-slate-200 dark:bg-slate-900 h-full w-[800px] dark:text-white">
        <img src={user?.profilepic} className="rounded-full"></img>
        <div className="flex flex-col items-center">
          <h1 className="text-xl">Username</h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded border p-2 dark:bg-slate-900 dark:text-white"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl">Email</h1>
          <h2 className="dark:text-white">{user?.email}</h2>
        </div>
        <button
          className="bg-red-500 dark:bg-red-700 text-white px-4 py-2bg-red-500 hover:bg-red-400 dark:hover:bg-red-500 text-white
        font-bold border-b-4 border-red-700 dark:border-red-800 hover:border-red-500 dark:hover:border-red-600 rounded h-10 w-64"
          type="submit"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
