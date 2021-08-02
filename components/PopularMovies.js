import { Image, Link, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieService from "../service/MovieService";
import Movie from "./Movie";

const PopularMovies = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    MovieService.getPopular()
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
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Movie movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default PopularMovies;
