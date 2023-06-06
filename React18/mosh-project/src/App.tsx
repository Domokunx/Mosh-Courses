import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gamegrid";
import { Analytics } from "@vercel/analytics/react";
import GenreList from "./components/genrelist";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platformselector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector, { SortOrder } from "./components/sortselector";
import GameHeading from "./components/gameheading";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <Show above="lg">
          <GridItem px={5} area="aside">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box pl={5}>
            <GameHeading gameQuery={gameQuery}/>
            <HStack spacing={5} mb={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
              />
              <SortSelector
                selectedSortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
      <Analytics />
    </>
  );
}

export default App;
