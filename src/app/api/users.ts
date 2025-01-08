import { fetchUserById, fetchUsers } from "../lib/users";

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
