"use client";

import axios from "axios";
import { useCallback, useMemo } from "react";
import { IoAddSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  movieId: string;
}

interface User {
  id: string;
  name: string;
  image?: string;
  email?: string;
  emailVerified?: string;
  favoriteIds: string[];
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  // check to see if the movieId passed in as a prop is currently favorited
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [movieId, currentUser]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/movies/favorites", {
        data: { movieId },
      });
    } else {
      response = await axios.post("/api/movies/favorites", { movieId });
    }

    const updatedFavoriteIds: string[] = response?.data?.favoriteIds || [];

    mutate({
      ...(currentUser as User),
      favoriteIds: updatedFavoriteIds,
    });

    //triggers a revalidation of the data. So it will refetch the data.
    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-zinc-100 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <IoAddSharp size={30} />
    </div>
  );
}
