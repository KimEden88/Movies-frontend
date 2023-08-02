import { ajax } from '../axios';

export const getRandomMovies = async () => {
  return ajax.get('/api/movies/random');
};
