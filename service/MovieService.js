import axios from "axios";

const API_KEY = "41250625009617e91c5ad82fbd838793";
const BASE_URL = "https://api.themoviedb.org/3/";

const getSearched = (searchValue) => {
  return axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchValue}`
  );
};

const getPopular = () => {
  return axios.get(`${BASE_URL}movie/popular/?api_key=${API_KEY}`);
};

const MovieService = {
  getSearched,
  getPopular,
};

export default MovieService;
