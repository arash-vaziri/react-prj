import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const dynamicHeading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="2rem">
      {dynamicHeading}
    </Heading>
  );
};

export default GameHeading;
