import Head from "next/head";
import Movie from "../components/Movie";
import MoviesList from "../components/MoviesList";
import { Text } from "@chakra-ui/layout";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <Text paddingLeft="3" paddingTop="3" fontSize="2xl">
        Popular Movies
      </Text>
      <MoviesList movies={movies} />
    </div>
  );
}

// SSR popular movies
export const getServerSideProps = async (context) => {
  const API_KEY = "41250625009617e91c5ad82fbd838793";
  const BASE_URL = "https://api.themoviedb.org/3/";

  const res = await fetch(`${BASE_URL}movie/popular/?api_key=${API_KEY}`);
  const movies = (await res.json()).results;

  return {
    props: {
      movies,
    },
  };
};
