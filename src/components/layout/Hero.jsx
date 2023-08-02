import { useEffect, useState } from 'react';
import { getRandomMovies } from '../../api/movies/getRandomMovie';

export const Hero = () => {
  const [randomMovie, setRandomMovie] = useState('');

  useEffect(() => {
    getRandomMovies()
      .then((res) => {
        setRandomMovie(res.data);
        console.log('Movie:', res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return randomMovie && <div>{randomMovie[0].title}</div>;
};
