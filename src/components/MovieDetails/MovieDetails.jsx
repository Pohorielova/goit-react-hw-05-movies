import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import { fetchMoviesDetails } from 'Services/Api';
export const MoviesDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) {
    return null;
  }

  //  const { recipient, account, total, date } = movie;

  return (
    <Box as="main">
      <Box as="section" mt={15} mb={15} display="flex" gridGap={20}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={350}
          alt=""
        />
        <Box as="div" display="flex" flexDirection="column" gridGap={20}>
          <h1>{movie.title}</h1>
          <p>
            Release date: {new Date(movie.release_date).toLocaleDateString()}
          </p>
          <p>User score: {Number(movie.popularity).toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
        </Box>
      </Box>
      <Box as="section" color="deeppink">
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Box>
      <Outlet />
    </Box>
  );
};
