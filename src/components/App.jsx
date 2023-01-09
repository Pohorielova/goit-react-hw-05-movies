import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { Box } from 'components/Box';
import { Movies } from './Movies/Movies';
import { MoviesDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Box as="header">
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<div>Notfound</div>} />
      </Routes>
    </div>
  );
};
