import { Image, Link, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieService from "../service/MovieService";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    MovieService.get(props.searchValue)
      .then((res) => {
        console.log(res);
        if (res.data.Response === "False") {
          return;
        }
        setMovies(res.data.Search);
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
          <div key={movie.imdbID}>
            <Link
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              isExternal
            >
              {movie.Title}
              <Center>
                <Image
                  src={movie.Poster}
                  alt="#movie poster#"
                  borderRadius="lg"
                />
              </Center>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
