import { isEmpty } from "lodash";

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

interface MovieListProps {
  data: Movie[];
  title: string;
}

export default function MovieList({ data, title }: MovieListProps) {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <div key={movie.id}>Movie</div>
          ))}
        </div>
      </div>
    </div>
  );
}
