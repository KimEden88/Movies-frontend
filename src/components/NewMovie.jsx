//import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { ajax } from '../api/axios';
import { addMovie } from '../api/movies/addMovie';

const NewMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [plot, setPlot] = useState('');
  const [duration, setDuration] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   director: '',
  //   year: '',
  //   genre: '',
  //   poster: '',
  //   rating: '',
  //   plot: '',
  //   duration: '',
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ajax
    //   .post('api/movies', {
    //     title,
    //     director,
    //     year,
    //     genre: [genre],
    //     rating,
    //     poster,
    //     plot,
    //     duration,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate('/');
    //   })
    //   .catch((e) => console.log(e));
    addMovie({
      title,
      director,
      year,
      genre: genre.split(','),
      rating,
      poster,
      plot,
      duration,
    })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="h-[90vh] flex align-center justify-center items-center bg-gray-900 text-[#F7FBFC] font-mono">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col align-center justify-center gap-6"
      >
        <h1 className="font-bold text-2xl pb-20">Please Fill Up The Form</h1>
        {/*Title*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="title"
            className="mr-3"
          >
            Title
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="title"
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        {/*Director*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="director"
            className="mr-3"
          >
            Director
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="director"
            value={director}
            onChange={(event) => setDirector(event.target.value)}
          />
        </div>
        {/*Year*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="year"
            className="mr-3"
          >
            Year
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </div>
        {/*Genre*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="genre"
            className="mr-3"
          >
            Genre
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="genre"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>
        {/*Poster*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="poster"
            className="mr-3"
          >
            Poster
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="poster"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
          />
        </div>
        {/*Rating*/}

        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="rating"
            className="mr-3"
          >
            Rating
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
        </div>

        {/*Plot*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="plot"
            className="mr-3"
          >
            Plot
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="plot"
            value={plot}
            onChange={(event) => setPlot(event.target.value)}
          />
        </div>

        {/*Duration*/}
        <div className="border-b-2 border-[#00ADB5]">
          <label
            htmlFor="duration"
            className="mr-3"
          >
            Duration
          </label>
          <input
            className="bg-transparent outline-none"
            type="text"
            name="duration"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>
        <button className="bg-[#00ADB5] px-6 py-2 font-semibold text-[#F7FBFC] rounded-full mt-4 shadow-lg shadow-cyan-500/50 hover:animate-pulse">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default NewMovie;
