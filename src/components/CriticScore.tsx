import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const badgeColor = score > 75 ? "green" : score > 40 ? "blue" : "yellow";

  return <Badge colorPalette={badgeColor}>{score}</Badge>;
};

export default CriticScore;
