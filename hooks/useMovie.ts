import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

interface Movie {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

export default function useMovie(movieId?: string) {
  const { data, error, isLoading } = useSWR<Movie>(movieId ? `/api/movies/${movieId}` : null, fetcher, { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false });

  return { data, error, isLoading };
}
