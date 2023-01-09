import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { fetchMoviesTrends } from 'Services/Api';
export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchMoviesTrends().then(trending => {
      const newData = trending.results;
      console.log(newData);
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
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Box>
  );
};
