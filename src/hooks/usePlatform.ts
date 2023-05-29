import { useQuery } from '@tanstack/react-query';
import { APIService } from '../services/api-client';

const apiClient = new APIService('/platforms/lists/parents');
export interface IPlatforms {
  id: string;
  name: string;
}
const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () => {
      return apiClient.get();
    },
    staleTime: 60 * 1000,
  });
};
export default usePlatforms;
