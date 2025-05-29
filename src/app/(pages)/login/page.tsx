"use client";

import { logIn } from "@/app/lib/firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log(auth.currentUser ? auth.currentUser : "User is null");
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="w-full h-[500px] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 flex flex-col gap-5 mt-20 bg-gray-100 dark:bg-slate-900 rounded-xl w-[800px] shadow-xl"
      >
        <h1 className="text-xl font-bold mb-4 dark:text-white">Log in</h1>
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
          Log in
        </button>
        <div className="flex flex-col justify-center w-full items-center">
          <p className="dark:text-white">Don't have a user?</p>
          <Link href={"/signup"} className="text-blue-700 dark:text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
