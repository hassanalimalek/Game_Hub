import { Platform } from '../components/PlatformListIcon';
import useData from './useData';

export interface IGames {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: any) =>
  useData<IGames>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.searchValue,
      },
    },
    [gameQuery]
  );

export default useGames;
