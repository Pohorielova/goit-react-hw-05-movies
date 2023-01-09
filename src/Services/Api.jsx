// https://api.themoviedb.org/3/movie/550?api_key=532b3122039bc5d97d2bdc19adad4ecb
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '532b3122039bc5d97d2bdc19adad4ecb';

async function fetchMoviesTrends() {
  const trending = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return trending.data;
}

async function fetchMoviesBySearch(searchQuery) {
  const movie = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  return movie.data;
}

async function fetchMoviesDetails(movieId) {
  const movie = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return movie.data;
}

export { fetchMoviesTrends, fetchMoviesBySearch, fetchMoviesDetails };
