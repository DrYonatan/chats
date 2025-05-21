"use client";

import { useState } from "react";
import { signUp } from "../../lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(username, email, password);
      router.push("/chats");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full h-[500px] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 flex flex-col gap-5 mt-20 bg-gray-100 dark:bg-slate-900 rounded-xl w-[800px] shadow-xl"
      >
        <h1 className="text-xl font-bold mb-4 dark:text-white">Sign Up</h1>
        <input
          className="border p-2 w-full mb-2 bg-white dark:bg-slate-900 text-black dark:text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          className="border p-2 w-full mb-2 bg-white dark:bg-slate-900 text-black dark:text-white"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="border p-2 w-full mb-2 bg-white dark:bg-slate-900 text-black dark:text-white"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2bg-blue-500 hover:bg-blue-400 text-white
        font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded h-10"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
