import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSubmitSearch: (searchText: string) => void;
}

const NavBar = ({ onSubmitSearch }: Props) => {
  return (
    <HStack p={"1rem"}>
      <Image src={logo} boxSize="3.75rem" />
      <SearchInput onSubmitSearch={onSubmitSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
