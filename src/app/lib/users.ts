import { database, onValue, ref, get } from "./firebase/firebase";
import { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const usersRef = ref(database, "users");
  let users: User[] = [];

  // Return a Promise so we can await the completion
  return new Promise<User[]>((resolve, reject) => {
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        users = Object.keys(data).map((key) => ({
          id: key,
          username: data[key].username,
          password: data[key].password,
          profilepic: data[key].profilepic,
        }));
        resolve(users); // resolve the promise with users data
      } else {
        resolve([]); // if no data is available, return an empty array
      }
    }, (error) => {
      reject(error); // reject promise on error
    });
  });
};

export const fetchUserById = async (userId: string) => {
  const userRef = ref(database, `users/${userId}`); // Reference the specific user by their ID
  
  try {
    const snapshot = await get(userRef); // Fetch the data once
    
    if (snapshot.exists()) {
      const userData = snapshot.val(); // Get the data from the snapshot
      console.log("User Data:", userData); // Log the data for the specific user
      return userData;
    } else {
      console.log("No data available for this user.");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

