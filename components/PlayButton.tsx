"use client";

import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface PlayButtonProps {
  movieId: string;
}

export default function PlayButton({ movieId }: PlayButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white text-zinc-900 rounded-md py-1 md:py-2 px-2 md:px-4 text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition"
    >
      <FaPlay size={16} className="mr-2" />
      Play
    </button>
  );
}
