"use client";

import axios from "axios";
import { useCallback, useMemo } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  movieId: string;
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  return <div>fav btn</div>;
}
