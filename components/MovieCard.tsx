"use client";

import { FaPlay } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal";
import { BiChevronDown } from "react-icons/bi";

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

interface MovieCardProps {
  data: Movie;
}

export default function MovieCard({ data }: MovieCardProps) {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 relative h-[12vw]">
      <img
        className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-100 w-full  h-full"
        src={data.thumbnailUrl}
        alt={`${data.title} thumbnail`}
      />

      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-100 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-t-md w-full"
          src={data.thumbnailUrl}
          alt={`${data.title} thumbnail`}
        />
        <div className="z-10 bg-zinc-950 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex items-center gap-3">
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white text-zinc-900 rounded-full grid place-items-center hover:bg-neutral-300"
              onClick={() => router.push(`/watch/${data?.id || ""}`)}
            >
              <FaPlay />
            </div>

            <FavoriteButton movieId={data.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full grid place-items-center transition hover:border-neutral-300"
            >
              <BiChevronDown
                className="group-hover/item:text-neutral-300"
                size={30}
              />
            </div>
          </div>

          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-zinc-100">2023</span>
          </p>

          <div className="flex mt-4 gap-2 items-center">
            <p className="text-zinc-300 text-[10px] lg:text-sm">
              {data.duration}
            </p>
          </div>

          <div className="flex mt-4 gap-2 items-center">
            <p className="text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
