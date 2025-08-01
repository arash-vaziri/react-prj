import { List, Text, HStack, Image, Spinner } from "@chakra-ui/react";
import useGenre from "@/hooks/useGenre";
import cropImageUrl from "@/services/cropImageUrl";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <Text> {error} </Text>}
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item paddingY="0.5em" key={genre.id}>
            <HStack>
              <Image
                src={cropImageUrl(genre.image_background)}
                boxSize="2em"
                borderRadius="0.3em"
              />
              <Text> {genre.name} </Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
