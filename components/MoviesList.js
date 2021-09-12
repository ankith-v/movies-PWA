import Movie from "./Movie";
import { Flex } from "@chakra-ui/layout";

const MoviesList = ({ movies }) => {
  console.log(movies);

  return (
    <div>
      <Flex flexWrap="wrap" padding="2" backgroundColor="blackAlpha.300">
        {movies.map((movie) => {
          return (
            <>
              <Movie movie={movie} />
            </>
          );
        })}
      </Flex>
    </div>
  );
};

export default MoviesList;
