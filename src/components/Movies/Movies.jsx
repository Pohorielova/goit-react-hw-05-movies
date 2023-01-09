
import { Box } from 'components/Box';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
  MovieCard,
  MovieList,
  TitleLink,
  MovieDesc,
  Title,
} from './Movies.styled';
import { fetchMoviesBySearch } from 'Services/Api';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);
  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('atatata');
      return;
    }

    setSearchQuery('');
    setSearchMovie([]);
    fetchMoviesBySearch(searchQuery).then(movie => {
      const newData = movie.results;
      setSearchMovie(searchMovie => {
        return [...searchMovie, ...newData];
      });
    });
  };

  return (
    <Box as="main">
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
      </SearchForm>

      <MovieList>
        {searchMovie.map(({ title, id, poster_path, release_date }, index) => (
          <MovieCard key={index}>
            <TitleLink to={`${id}`} id={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={270}
                alt=""
              />
              <Title>{title}</Title>
            </TitleLink>
            <MovieDesc>
              Release date: {new Date(release_date).toLocaleDateString()}
            </MovieDesc>
          </MovieCard>
        ))}
      </MovieList>
    </Box>
  );
};
