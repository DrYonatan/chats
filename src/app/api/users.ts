import { getAuth } from "firebase/auth";
import { fetchUserById, fetchUsers } from "../lib/users";
import { User } from "../types/user";
import { getChatById } from "./chats";
import { Chat } from "../types/chat";

export const getUsers = async (): Promise<void> => {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUserById = async (id: string): Promise<User> => {
  const auth = getAuth();
  let user: User = {
    id: "",
    username: "",
    email: "",
    profilepic: "",
    chats: [],
  };

  if (auth.currentUser) {
    const data = await fetchUserById(id);
    if (data) {
      let chats: Chat[] = [];
      if (data.chatsIds != undefined) {
        chats = await Promise.all(
          data.chatsIds.map((chatId: string) => getChatById(chatId))
        );
      }

      user = {
        id: auth.currentUser.uid,
        username: data.username,
        email: data.email,
        profilepic: data.profilepic,
        chats: chats?.filter(Boolean), // filters out null if a chat wasn't found
      };
    }
  }
  return user;
};
