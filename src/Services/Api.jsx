// https://api.themoviedb.org/3/movie/550?api_key=532b3122039bc5d97d2bdc19adad4ecb
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '532b3122039bc5d97d2bdc19adad4ecb';

async function fetchMoviesTrends() {
  const trending = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return trending.data;
}
export { fetchMoviesTrends };
