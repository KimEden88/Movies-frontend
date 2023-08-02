import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateMovie, setUpdateMovie] = useState({
    title: '',
    director: '',
    year: '',
    genre: '',
    poster: '',
    rating: '',
    plot: '',
    duration: '',
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then((res) => {
        console.log('hello:', res.data);

        setUpdateMovie({ ...res.data, genre: res.data.genre.join(',') });
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('out:', updateMovie);
    axios
      .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`, {
        ...updateMovie,
        genre: updateMovie.genre.split(','),
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateMovie({ ...updateMovie, [name]: value });
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        {/*Title*/}
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={updateMovie.title}
          onChange={handleChange}
        />
        {/*Director*/}
        <label htmlFor="">Director</label>
        <input
          type="text"
          name="director"
          value={updateMovie.director}
          onChange={handleChange}
        />
        {/*Year*/}
        <label htmlFor="">Year</label>
        <input
          type="text"
          name="year"
          value={updateMovie.year}
          onChange={handleChange}
        />
        {/*Genre*/}
        <label htmlFor="">Genre</label>
        <input
          type="text"
          name="genre"
          value={updateMovie.genre}
          onChange={handleChange}
        />
        {/*Poster*/}
        <label htmlFor="">Poster</label>
        <input
          type="text"
          name="poster"
          value={updateMovie.poster}
          onChange={handleChange}
        />
        {/*Rating*/}
        <label htmlFor="">Rating</label>
        <input
          type="text"
          name="rating"
          value={updateMovie.rating}
          onChange={handleChange}
        />
        {/*Plot*/}
        <label htmlFor="">Plot</label>
        <input
          type="text"
          name="plot"
          value={updateMovie.plot}
          onChange={handleChange}
        />
        {/*Duration*/}
        <label htmlFor="">Duration</label>
        <input
          type="text"
          name="duration"
          value={updateMovie.duration}
          onChange={handleChange}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
