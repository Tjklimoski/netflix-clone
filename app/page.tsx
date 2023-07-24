"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export default function Home() {
  // we pass a defualt value of [] to data so that our value being passed
  // to MoveList data props is not undefined.
  // the type in MovieList for data does not allow for undefined.
  const { data: movies = [], error, isLoading } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  );
}
