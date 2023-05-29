import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/imageURL";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre) => (
        <ListItem py={"5px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            />
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
