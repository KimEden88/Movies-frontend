import { ajax } from '../axios';

export const getMovies = async () => {
  return ajax.get('/api/movies');
};
