import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './Home/Home';
import { Box } from 'components/Box';
import { Movies } from './Movies/Movies';
import { MoviesDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Box as="div" pl={15} pr={15}>
      <Box as="header" borderBottom="2px solid orange">
        <Box as="nav" display="flex" gridGap={15}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Box>
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
    </Box>
  );
};

// styleApp
const NavItem = styled(NavLink)`
  color: black;
  font-size: 28px;
  padding: 20px 0;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: deeppink;
  }
`;
