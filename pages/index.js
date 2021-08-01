import Head from "next/head";
import Movies from "../components/Movies";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Home({ articles }) {
  const [search, setSearch] = useState(" ");

  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
      <SearchBar
        onChange={(e) => {
          if (e.target.value.length > 3) setSearch(e.target.value);
        }}
      />
      <Movies searchValue={search} />
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
