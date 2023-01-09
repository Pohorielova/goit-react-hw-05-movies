import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { fetchMoviesTrends } from 'Services/Api';
export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchMoviesTrends().then(trending => {
      const newData = trending.results;

      setTrends(trends => {
        return [...trends, ...newData];
      });
    });
  }, []);

  return (
    <Box as="main">
      <Box as="h1">Trending today</Box>
      <ul>
        {trends.map(({ title, id }, index) => (
          <li key={index}>
            <Link to={`movies/${id}`} id={id}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
