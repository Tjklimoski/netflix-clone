import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { StringLiteral } from 'typescript';

interface User {
  id: string;
  name: string;
  image?: string;
  email?: string;
  emailVerified?: string;
  favoriteIds: string[];
}

export default function useCurrentUser() {
  const { data, error, isLoading, mutate } = useSWR<User>('/api/auth/user', fetcher)

  return { data, error, isLoading, mutate }
}