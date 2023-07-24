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
    <div className="group bg-zinc-900 relative h-[12-vw]">
      <img
        className="cursor-pointer object-cover transition duration-300 shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full  h-full"
        src={data.thumbnailUrl}
        alt={`${data.title} thumbnail`}
      />
    </div>
  );
}
