import useData from './useData';

export interface IPlatforms {
  id: string;
  name: string;
}

const usePlatforms = () => useData<IPlatforms>('/platforms/lists/parents');

export default usePlatforms;
