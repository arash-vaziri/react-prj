import { type ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box overflow="hidden" borderRadius="0.6rem">
      {children}
    </Box>
  );
};

export default GameCardContainer;
