import {
  List,
  Text,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre, { type Genre } from "@/hooks/useGenre";
import cropImageUrl from "@/services/cropImageUrl";

interface Props {
  onGenreSelected: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onGenreSelected, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <Text> {error} </Text>}
      <Heading as="h2" marginY={3} fontSize="1.5rem">
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item paddingY="0.5em" key={genre.id}>
            <HStack>
              <Image
                src={cropImageUrl(genre.image_background)}
                boxSize="2em"
                borderRadius="0.3em"
                objectFit="cover"
              />
              <Button
                value={genre.id}
                variant="plain"
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onGenreSelected(genre)}
                whiteSpace="normal"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
