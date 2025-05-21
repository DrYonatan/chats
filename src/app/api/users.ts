import { getAuth } from "firebase/auth";
import { fetchUserById, fetchUsers } from "../lib/users";
import { User } from "../types/user";

export const getUsers = async (): Promise<void> => {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getCurrentUser = async (): Promise<User> => {
  const auth = getAuth();
  console.log(auth.currentUser)
  const user: User = await fetchUserById(
    auth.currentUser ? auth.currentUser.uid : ""
  );
  return user;
};
