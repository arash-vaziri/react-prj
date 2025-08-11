import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmitSearch: (searchText: string) => void;
}

const SearchInput = ({ onSubmitSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSubmitSearch(searchRef.current.value);
      }}
    >
      <InputGroup flex={1} startElement={<BsSearch />}>
        <Input
          ref={searchRef}
          placeholder="Searching games..."
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
