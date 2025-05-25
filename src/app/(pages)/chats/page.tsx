"use client";

import { useCurrentUser } from "@/app/contexts/UserContext";

export default function Page() {
  const user = useCurrentUser();

  return <div className="h-full">Hello {user?.username}, Select a chat!</div>;
}
