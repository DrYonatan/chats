import { fetchUserById, fetchUserByEmail, fetchUsers } from "../lib/users";
import { User } from "../types/user";

export const getUsers = async (): Promise<void> => {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUserbyId = async (id: string) => {
  const user = await fetchUserById(id);
  return user;
};

export const getUserByUsernameAndPassword = async (email: string): Promise<User | null> => {
  const user: User | null = await fetchUserByEmail(email);
  return user;
}
