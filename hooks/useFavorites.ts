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

export default function useFavorites() {
  // This is only sending a GET request to the favorites route
  // will only return an array of movie objects based on current user.
  const { data, error, isLoading, mutate } = useSWR<Movie>('/api/movies/favorites', fetcher, { revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false });

  return { data, error, isLoading, mutate }
}