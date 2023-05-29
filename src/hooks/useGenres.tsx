export interface IGenres {
  id: string;
  name: string;
  image_background: string;
}
import { APIService } from '../services/api-client';
import { useQuery } from '@tanstack/react-query';

const apiClient = new APIService('/genres');

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => {
      return apiClient.get();
    },
    staleTime: 60 * 1000,
  });
};
export default useGenres;
