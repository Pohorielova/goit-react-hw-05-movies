import { NavLink, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect, Suspense } from 'react';
import { Box } from 'components/Box';
import { fetchMoviesDetails } from 'Services/Api';
import { ColorRing } from 'react-loader-spinner';
const MoviesDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) {
    return null;
  }

  const { poster_path, release_date, popularity, overview, genres, title } =
    movie;

  return (
    <Box as="main">
      <Box
        as="section"
        pt={15}
        pb={15}
        display="flex"
        gridGap={70}
        borderBottom="2px solid orange"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={250}
          alt=""
        />
        <Box
          as="div"
          display="flex"
          flexDirection="column"
          gridGap={20}
          width={900}
        >
          <h1>{title}</h1>
          <Box as="div" display="flex" flexDirection="column" gridGap={10}>
            <p>Release date: {new Date(release_date).toLocaleDateString()}</p>
            <p>User score: {Number(popularity).toFixed(0)}%</p>
          </Box>

          <Box as="div" display="flex" flexDirection="column" gridGap={10}>
            <h2>Overview:</h2>
            <p>{overview}</p>
          </Box>
          <Box as="div" display="flex" flexDirection="column" gridGap={10}>
            <h2>Genres:</h2>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </Box>
        </Box>
      </Box>
      <Box
        as="section"
        pt={15}
        pb={15}
        borderBottom="2px solid orange"
        display="flex"
        alignItems="center"
        gridGap={10}
      >
        <h3>Additional information:</h3>
        <NavItem to="cast">Cast</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
      </Box>
      <Suspense
        fallback={
          <div>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MoviesDetails;
// style
const NavItem = styled(NavLink)`
  color: black;
  font-size: 24px;
  text-decoration: underline;

  &.active {
    color: orange;
  }

  :hover:not(.active) {
    color: deeppink;
  }
`;
