"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function Provider({ children }: SessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
