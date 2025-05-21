"use client";

import { getCurrentUser } from "@/app/api/users";
import { User } from "@/app/types/user";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getCurrentUser().then((data) => {
      setUser(data);
    });
  }, []);

  return <div className="h-full">Hello {user?.username}, Select a chat!</div>;
}
