"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";

export default function Home() {
  const { data: user, error, isLoading, mutate } = useCurrentUser();

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
