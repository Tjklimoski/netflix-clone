"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

export default function Home() {
  const { data: user, error, isLoading, mutate } = useCurrentUser();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList />
      </div>
    </>
  );
}
