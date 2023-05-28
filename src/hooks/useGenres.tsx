export interface IGenres {
  id: string;
  name: string;
  image_background: string;
}
import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => {
      return apiClient.get('/genres').then((res) => res.data);
    },
    staleTime: 60 * 1000,
  });
};
export default useGenres;
