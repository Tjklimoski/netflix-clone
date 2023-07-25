"use client";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function Watch({ params }: { params: { movieId: string } }) {
  const router = useRouter();
  const { movieId } = params;
  const { data } = useMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <BsArrowLeft
          onClick={() => router.back()}
          size={30}
          className="cursor-pointer"
        />
        <p className="text-1xl lg:text-2xl font-bold">
          <span className="font-light me-2">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video className="h-full w-full" src={data?.videoUrl} autoPlay controls />
    </div>
  );
}
