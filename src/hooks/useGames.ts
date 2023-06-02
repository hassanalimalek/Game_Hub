import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Platform } from '../components/PlatformListIcon';
import { APIService } from '../services/api-client';

const apiClient = new APIService('/games');

export interface IGames {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
}

const useGames = (gameQuery: any) => {
  return useInfiniteQuery<any, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      });
    },
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export const useGame = (slug: any) =>
  useQuery<any, Error>({
    queryKey: ['game-detail', slug],
    queryFn: () => {
      return apiClient.get(slug);
    },
  });

export default useGames;
