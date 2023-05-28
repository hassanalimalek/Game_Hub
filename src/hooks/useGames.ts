import { useQuery } from '@tanstack/react-query';
import { Platform } from '../components/PlatformListIcon';
import apiClient from '../services/api-client';

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
      return apiClient
        .get('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder?.value,
            search: gameQuery.searchValue,
          },
        })
        .then((res) => {
          return res.data;
        });
    },
    staleTime: 60 * 1000,
  });
};
export default useGames;
