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
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={250}
          alt=""
        />
        <h1>
          {movie.title} {new Date(movie.release_date).toLocaleDateString()}
        </h1>
        <p>User score: {Number(movie.popularity).toFixed(0)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
      </section>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </Box>
  );
};
