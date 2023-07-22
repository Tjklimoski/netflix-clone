"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="h-10 w-full bg-red-600 rounded-md"
      onClick={() => signOut()}
    >
      Logout!
    </button>
  );
}
