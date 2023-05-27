import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Platform } from '../components/PlatformListIcon';

export interface IGames {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface IFetchGamesResponse {
  count: string;
  next: string;
  previous: string;
  results: IGames[];
}

function useGames() {
  const [games, setGames] = useState<IGames[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  console.log('games -->', games);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<IFetchGamesResponse>('/games')
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { games, error, isLoading };
}

export default useGames;
