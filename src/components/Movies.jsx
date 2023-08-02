//import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../api/movies/getMovies';
import { Hero } from './layout/Hero';

const Movies = () => {
  const [movies, setMovies] = useState(null); //Get Movies from DB
  useEffect(() => {
    // axios
    //   .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
    //   .then((res) => {
    //     setMovies(res.data);
    //     console.log('All Movies:', res.data);
    //   })
    // .catch((e) => console.log(e));

    getMovies()
      .then((res) => {
        setMovies(res.data);
        console.log('All Movies:', res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Hero />
      <div className="bg-gray-900 h-screen flex flex-col justify-center items-center gap-x-16 text-white ">
        <ul className="flex justify-center align-center flex-wrap gap-12">
          {movies &&
            movies.map((movie) => {
              return (
                <div
                  className=" w-[350px] h-[470px] bg-transparent cursor-pointer group perspective "
                  key={movie.id}
                >
                  <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                    <div className="absolute backface-hidden border-2 w-full h-full">
                      <img
                        className="w-full h-full"
                        src={movie.poster}
                        alt={movie.title}
                      />
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#E4F9F5] overflow-hidden">
                      <div className="text-center flex flex-col items-center justify-center h-full text-[#222831] p-4">
                        <h1 className="text-3xl mb-3 pb-2 font-semibold">
                          {movie.title}
                          <span className="text-sm">({movie.year})</span>
                        </h1>
                        <p>
                          {movie.rating}.{Math.floor(Math.random() * 10)} Rating
                        </p>
                        <p>By: {movie.director}</p>

                        <p>{movie.plot}</p>
                        <p>Duration: {movie.duration}.min</p>
                        <button className="bg-[#222831] px-6 py-2 font-semibold text-[#F7FBFC] rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-5 scale-0 group-hover:scale-125">
                          <Link to={`/movies/${movie.id}`}>Watch Now</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Movies;
