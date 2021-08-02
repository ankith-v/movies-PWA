import SearchMovies from "../components/SearchMovies";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState(" ");
  return (
    <div>
      <SearchBar
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <SearchMovies searchValue={search} />
    </div>
  );
};

export default SearchPage;
