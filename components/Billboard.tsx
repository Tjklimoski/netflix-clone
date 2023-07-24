import useBillboard from "@/hooks/useBillboard";
import { BiInfoCircle } from "react-icons/bi";

export default function Billboard() {
  const { data: billboard, error, isLoading } = useBillboard();

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={billboard?.thumbnailUrl}
        src={billboard?.videoUrl}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className=" w-[50%] first-letter:text-1xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl select-none">
          {billboard?.title}
        </p>
        <p className="text-sm md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {billboard?.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 text-xs lg:text-lg font-semibold hover:bg-opacity-20 transition flex items-center">
            <BiInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
