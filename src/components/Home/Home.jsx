import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesTrends } from 'Services/Api';

import {
  TrendCard,
  TrendList,
  TitleLink,
  TrendDesc,
  Title,
} from './Home.styled';
const Home = () => {
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
      <Box as="h1" fontSize={34} fontWeight={500} mt={15} mb={15}>
        Trending today
      </Box>

      <TrendList>
        {trends.map(({ title, id, poster_path, release_date }, index) => (
          <TrendCard key={index}>
            <TitleLink to={`movies/${id}`} id={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={270}
                alt=""
              />
              <Title>{title}</Title>
            </TitleLink>
            <TrendDesc>
              Release date: {new Date(release_date).toLocaleDateString()}
            </TrendDesc>
          </TrendCard>
        ))}
      </TrendList>
      <Outlet />
    </Box>
  );
};
export default Home;
