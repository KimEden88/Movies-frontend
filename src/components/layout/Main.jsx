import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies';
import Movie from '../Movie';
import NewMovie from '../NewMovie';
import UpdateMovie from '../UpdateMovie';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Movies />}
        />
        <Route
          path="/movies/:id"
          element={<Movie />}
        />
        <Route
          path="/movies/new"
          element={<NewMovie />}
        />
        <Route
          path="/movies/:id/update"
          element={<UpdateMovie />}
        />
      </Routes>
    </main>
  );
};

export default Main;
