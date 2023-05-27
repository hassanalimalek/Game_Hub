import useData from './useData';

export interface IGenres {
  id: string;
  name: string;
  image_background: string;
}

const useGenres = () => useData<IGenres>('/genres');

export default useGenres;
