import { ajax } from '../axios';

export const getMovieById = async (id) => {
  return ajax.get(`/api/movies/${id}`);
};
