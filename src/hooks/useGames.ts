import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface IGames {
  id: string;
  name: string;
  background_image: string;
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
    apiClient
      .get<IFetchGamesResponse>('/games')
      .then((res) => {
        console.log('--', res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { games, error };
}

export default useGames;
