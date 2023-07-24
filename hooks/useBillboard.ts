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

export default function useBillboard() {
  const { data, error, isLoading } = useSWR<Movie>('/api/movies/random', fetcher, { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false });

  return { data, error, isLoading }
}