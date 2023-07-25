"use client";

import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface PlayButtonProps {
  movieId: string;
}

export default function PlayButton({ movieId }: PlayButtonProps) {
  const router = useRouter();

  return <div>PlayButton</div>;
}
