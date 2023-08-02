import { ajax } from '../axios';
export const addMovie = async (data) => {
  return ajax.post('/api/movies', data);
};
