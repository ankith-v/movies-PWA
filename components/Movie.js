import { Image, Link, Box } from "@chakra-ui/react";
import React from "react";

const Movie = (props) => {
  return (
    <Box padding="2">
      <Link
        href={`https://www.themoviedb.org/movie/${props.movie.id}`}
        isExternal
      >
        {props.movie.original_title}
        <Image
          src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
          alt="#movie poster#"
          borderRadius="lg"
          maxW="60"
        />
      </Link>
    </Box>
  );
};

export default Movie;
