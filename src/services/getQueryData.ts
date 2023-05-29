import { useQueryClient } from '@tanstack/react-query';

const GetQueryData = (queryKey: any) => {
  const queryClient = useQueryClient();
  const dataQuery: any = queryClient.getQueryData(queryKey);
  const dataResults = dataQuery?.results;
  return dataResults;
};
export default GetQueryData;
