import { Link } from 'react-router-dom';
import { Box } from 'components/Box';
import { useState } from 'react';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
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
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
      </SearchForm>

      <ul>
        {searchMovie.map(({ title, id }, index) => (
          <li key={index}>
            <Link to={`${id}`} id={id}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
