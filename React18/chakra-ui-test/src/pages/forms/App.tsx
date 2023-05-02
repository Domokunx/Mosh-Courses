import {
  Box,
  Button,
  useColorMode,
  Heading,
  Center,
} from "@chakra-ui/react";
import { NavBar } from "../../components/navbar";

// Boxes are the most abstract, they render divs
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Box marginTop={5}>
        <Center>
          <Heading>Chakra UI Forms</Heading>
        </Center>

        <Button top={"-40px"} ml={5} onClick={toggleColorMode}>
          Toggle: {colorMode === "light" ? "dark" : "light"}
        </Button>
      </Box>

      <NavBar selected="Forms"/>
    </Box>
  );
}

export default App;
