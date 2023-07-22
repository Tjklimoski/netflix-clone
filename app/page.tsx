"use client";

import LogoutButton from "@/components/LogoutButton";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const { data: user, error, isLoading, mutate } = useCurrentUser();

  console.log(user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-2xl">Hello World</h1>
      <LogoutButton />
    </main>
  );
}
