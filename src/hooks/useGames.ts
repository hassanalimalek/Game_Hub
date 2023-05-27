import { Platform } from '../components/PlatformListIcon';
import useData from './useData';

export interface IGames {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<IGames>('/games');

export default useGames;
