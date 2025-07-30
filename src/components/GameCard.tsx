import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={game.background_image} overflow={"hidden"} />
      <Card.Body>
        <Card.Title> {game.name} </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
