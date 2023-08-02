import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMovieById } from '../api/movies/getMovieById';

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null); //Get movie from DB
  useEffect(() => {
    // axios
    //   .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
    //   .then((res) => {
    //     setMovie(res.data);
    //     console.log('Movie:', res.data);
    //   })
    //   .catch((e) => console.log(e));
    getMovieById(id)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  //Delete the current book
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
      .then(() => navigate('/'))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {movie && (
        <div className="font-mono text-[#F7FBFC]">
          <h1>{movie.title}</h1>
          <button>
            <Link to={`/movies/${id}/update`}>Update Movie</Link>
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Movie;
