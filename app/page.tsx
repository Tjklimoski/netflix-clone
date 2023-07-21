"use client";

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-2xl">Hello World</h1>
      <button
        className="h-10 w-full bg-red-600 rounded-md"
        onClick={() => signOut()}
      >
        Logout!
      </button>
    </main>
  );
}
