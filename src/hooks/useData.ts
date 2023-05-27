import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface IFetchResponse {
  count: string;
  next: string;
  previous: string;
  results: any[];
}
function useData<T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<IFetchResponse>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
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
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
}

export default useData;
