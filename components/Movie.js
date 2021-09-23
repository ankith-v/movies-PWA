import { Image, Link, Box, Text } from "@chakra-ui/react";
import React from "react";

const Movie = (props) => {
  return (
    <Box padding="1">
      <Link
        href={`https://www.themoviedb.org/movie/${props.movie.id}`}
        isExternal
      >
        <Text
          maxW="60"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          textAlign="center"
          paddingBottom="0.5"
        >
          {props.movie.original_title}
        </Text>
        <Box borderRadius="lg" width="60" minH="72">
          <Image
            src={`https://image.tmdb.org/t/p/w400/${props.movie.poster_path}`}
            alt=""
            borderRadius="lg"
            maxW="60"
          />
        </Box>
      </Link>
    </Box>
  );
};

export default Movie;
