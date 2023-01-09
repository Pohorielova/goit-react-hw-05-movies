import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import { fetchMoviesCast } from 'Services/Api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);
  if (!cast) {
    return null;
  }
  console.log('cast', cast.cast);

  return (
    <Box as="section">
      <ul>
        {cast.cast.map((cast, index) => (
          <li key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              width={100}
              alt=""
            />
            <p>{cast.name}</p>
            <p>character:{cast.character}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};
