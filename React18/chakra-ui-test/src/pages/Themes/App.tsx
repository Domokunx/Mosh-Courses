import {
  Box,
  Button,
  useColorMode,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import { NavBar } from "../../components/navbar";
import { Analytics } from "@vercel/analytics/react";
import Introduction from "./components/introduction";
import Colors from "./components/colors";
import Typography from "./components/typography";
import Breakpoints from "./components/breakpoints";

// Boxes are the most abstract, they render divs
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box w={["600px", "768px", "960px", "full"]}>
        <Box marginTop={5}>
          <Center>
            <Heading>
              <Link href="/">Chakra UI Themes</Link>
            </Heading>
          </Center>

          <Button top={"-40px"} ml={5} onClick={toggleColorMode}>
            Toggle: {colorMode === "light" ? "dark" : "light"}
          </Button>
        </Box>

        <NavBar colorMode={colorMode} selected="Themes" />

        <Introduction />
        <Colors />
        <Typography />
        <Breakpoints />

      </Box>
      <Analytics />
    </>
  );
}

export default App;
