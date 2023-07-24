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
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-zinc-100 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <IoAddSharp size={30} />
    </div>
  );
}
