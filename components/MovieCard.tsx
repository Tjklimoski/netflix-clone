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
  return (
    <div className="group bg-zinc-900 relative h-[12vw]">
      <img
        className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full  h-full"
        src={data.thumbnailUrl}
        alt={`${data.title} thumbnail`}
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={data.thumbnailUrl}
          alt={`${data.title} thumbnail`}
        />
      </div>
    </div>
  );
}
