import axios from 'axios';

const get = searchValue => {
  return axios.get(`http://www.omdbapi.com/?apikey=8515daa4&s=${searchValue}`);
};

const MovieService = {
  get,
};

export default MovieService;
