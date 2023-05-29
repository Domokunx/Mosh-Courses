import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./gamecard";
import GameCardSkeleton from "./gamecardskeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6];

  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3}} spacing={10} p={5}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;