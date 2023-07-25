"use client";

import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

interface InfoModalProps {
  visible?: boolean;
  onClose: () => void;
}

export default function InfoModal({ visible, onClose }: InfoModalProps) {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  function handleClose() {
    setIsVisible(false);
    // setTimeout to allow for short close animation before triggering onClose()
    setTimeout(() => {
      onClose();
    }, 300);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`z-50 transition duration-300 bg-black flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 ${
        isVisible ? "bg-opacity-80" : "bg-opacity-0"
      }`}
    >
      <div className="w-auto max-w-3xl mx-auto rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          {/* Modal header - Video, close button, title, play button, favorite button */}
          <div className="relative h-96">
            <video
              className="w-full h-full brightness-[60%] object-cover"
              autoPlay
              muted
              loop
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
            />
            <div
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 grid place-items-center"
              onClick={handleClose}
            >
              <AiOutlineClose size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                {data?.title} TITLE
              </p>
              <div className="flex gap-4 items-center">
                <PlayButton movieId={data?.id || ""} />
                <FavoriteButton movieId={data?.id || ""} />
              </div>
            </div>
          </div>

          {/* Modal body */}
          <div className="px-12 py-8">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-lg">{data?.duration}</p>
            <p className="text-lg">{data?.genre}</p>
            <p className="text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
