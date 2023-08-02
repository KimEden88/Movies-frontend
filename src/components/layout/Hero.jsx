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

  return (
    randomMovie && (
      <div className="flex align-center items-center justify-around m-auto flex-col font-mono  pt-10 pb-10 w-full gap-3 bg-gray-800 text-[#F8F6F4] text-center text-l md:flex-row">
        <div className="w-full h-full flex flex-col align-center justify-center items-stretch basis-1/2  m-2 p-2 gap-10">
          <h1 className="text-5xl text-center font-semibold uppercase text-[#E3F4F4]">
            {randomMovie[0].title}
          </h1>
          <div className=" flex align-center items-center justify-center gap-3 text-[#E8E2E2]">
            (<p className="font-semibold">{randomMovie[0].year}</p>
            <p>{randomMovie[0].duration}.m</p>
            <p>
              {randomMovie[0].rating}.{Math.floor(Math.random() * 10)}/10
            </p>
            )
          </div>
          <p className="text-2xl text-italic">{randomMovie[0].plot}</p>
          <p className="text-center">[ {randomMovie[0].genre} ]</p>
        </div>
        <div className=" w-[400px] h-[520px] bg-transparent cursor-pointer  flex  align-center justify-center basis-1/2">
          <img
            className="w-[400px] h-[520px]"
            src={randomMovie[0].poster}
            alt={randomMovie[0].title}
          />
        </div>
      </div>
    )
  );
};
