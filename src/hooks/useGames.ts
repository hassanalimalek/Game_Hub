import { Platform } from '../components/PlatformListIcon';
import useData from './useData';
import { IGenres } from './useGenres';

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
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id]
  );

export default useGames;
