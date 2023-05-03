import {
  Box,
  Button,
  useColorMode,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "../components/navbar";

// Boxes are the most abstract, they render divs
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box minW={"620px"}>
        <Box marginTop={5}>
          <Center>
            <Heading><Link href="/">Chakra UI Hub</Link></Heading>
          </Center>
          <Button top={"-40px"} ml={5} onClick={toggleColorMode}>
            Toggle: {colorMode === "light" ? "dark" : "light"}
          </Button>
        </Box>
        <NavBar selected="" colorMode={colorMode}/>
        <br />
        <Box>
          <Center>Welcome to my very badly composed website</Center>
        </Box>
      </Box>
      <Analytics />
    </>
  );
}

export default App;
