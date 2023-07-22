import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export default function useCurrentUser() {
  const { data, error, isLoading, mutate } = useSWR('/api/auth/user', fetcher)

  return { data, error, isLoading, mutate }
}