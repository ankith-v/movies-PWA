import React, { useEffect, useState } from "react";
import MovieService from "../service/MovieService";
import MoviesList from "./MoviesList";

const SearchMovies = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    MovieService.getSearched(props.searchValue)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, [props.searchValue]);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default SearchMovies;
