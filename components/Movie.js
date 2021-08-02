import { Image, Link, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieService from "../service/MovieService";

const Movie = (props) => {
  return (
    <div>
      {props.movie.original_title}
      <Center>
        <Image
          src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
          alt="#movie poster#"
          borderRadius="lg"
          maxW="60"
        />
      </Center>
    </div>
  );
};

export default Movie;
