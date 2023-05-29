import { useQuery } from '@tanstack/react-query';
import { Platform } from '../components/PlatformListIcon';
import { APIService } from '../services/api-client';

const apiClient = new APIService('/games');
export interface IGames {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: any) => {
  return useQuery<any, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => {
      return apiClient.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery.sortOrder?.value,
          search: gameQuery?.searchValue,
        },
      });
    },
    staleTime: 60 * 1000,
  });
};
export default useGames;
