"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { data: user, error, isLoading, mutate } = useCurrentUser();

  console.log(user);

  return (
    <>
      <Navbar />
    </>
  );
}
