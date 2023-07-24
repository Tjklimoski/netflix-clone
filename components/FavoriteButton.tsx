"use client";

import axios from "axios";
import { useCallback, useMemo } from "react";
import { IoAddSharp } from "react-icons/io5";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  movieId: string;
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  // check to see if the movieId passed in as a prop is currently favorited
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [movieId, currentUser]);

  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-zinc-100 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <IoAddSharp size={30} />
    </div>
  );
}
