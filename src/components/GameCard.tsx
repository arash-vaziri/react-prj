import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import cropImageUrl from "@/services/cropImageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={cropImageUrl(game.background_image)} />
      <Card.Body>
        <HStack
          justifyContent="space-between"
          marginTop="1.2em"
          marginBottom={2}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title> {game.name} </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
