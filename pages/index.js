import Head from "next/head";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import PopularMovies from "../components/PopularMovies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <PopularMovies />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
