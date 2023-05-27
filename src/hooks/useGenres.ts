import useData from './useData';

export interface IGenres {
  id: string;
  name: string;
}

const useGenres = () => useData<IGenres>('/games');

export default useGenres;
