import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gamegrid";
import { Analytics } from "@vercel/analytics/react";
import GenreList from "./components/genrelist";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platformselector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);

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
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem px={5} area="aside">
            <GenreList
              selectedGenre={genre}
              onSelectGenre={(genre) => setGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={platform}
            onSelectPlatform={(platform) => setPlatform(platform)}
          />
          <GameGrid selectedGenre={genre} selectedPlatform={platform} />
        </GridItem>
      </Grid>
      <Analytics />
    </>
  );
}

export default App;
