import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Home from './Home/Home';
import { Box } from 'components/Box';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Movies = lazy(() => import('./Movies/Movies'));
const MoviesDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Box as="div" pl={15} pr={15}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
};
