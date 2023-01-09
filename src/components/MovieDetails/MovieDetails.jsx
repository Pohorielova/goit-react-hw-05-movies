import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
// import { useState, useEffect } from 'react';
import { fetchMoviesDetails } from 'Services/Api';
export const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log('id', movieId);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) {
    return null;
  }
  console.log(movie);
  //  const { recipient, account, total, date } = movie;

  return (
    <Box as="main">
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={250}
          alt=""
        />
        <h1>{movie.title}</h1>
        <p>User score: {movie.popularity}</p>
        <h2>Overwiev</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
      </section>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </section>
    </Box>
  );
};
