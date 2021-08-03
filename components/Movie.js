import { Image, Link, Center, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Movie = (props) => {
  return (
    <Box padding="2">
      {props.movie.original_title}
      <Image
        src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
        alt="#movie poster#"
        borderRadius="lg"
        maxW="60"
      />
    </Box>
  );
};

export default Movie;
