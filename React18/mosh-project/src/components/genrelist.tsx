import { HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/imageURL";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />
  return (
    <>
      <Heading my={5} fontSize={"2xl"}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem py={"5px"} key={genre.id} >
            <HStack>
              <Image
                boxSize={"32px"}
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button whiteSpace={"normal"} textAlign={"left"} fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} variant={"link"} fontSize={"large"}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
