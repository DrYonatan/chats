"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchUserById } from "@/app/lib/users";
import { User } from "@/app/types/user"; // adjust this import to where your User type is
import { getUserById } from "../api/users";

// 👇 Properly type the context: User | null
const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData = await getUserById(firebaseUser.uid);
        if (userData) {
          setUser({
            id: firebaseUser.uid,
            email: firebaseUser.email ?? "",
            username: userData.username,
            profilepic: userData.profilepic,
            chats: userData.chats, // optional
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// 👇 Hook is still typed properly
export const useCurrentUser = () => useContext(UserContext);
