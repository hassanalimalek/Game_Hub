import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface IPlatforms {
  id: string;
  name: string;
}
const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () => {
      return apiClient.get('/platforms/lists/parents').then((res) => {
        return res.data;
      });
    },
    staleTime: 60 * 1000,
  });
};
export default usePlatforms;
