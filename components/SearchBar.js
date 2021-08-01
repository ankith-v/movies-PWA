import { Input } from '@chakra-ui/react';

const SearchBar = props => {
  return (
    <div>
      <Input
        border="4px"
        placeholder="Search movie by name"
        variant="filled"
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBar;
