import {
  Box,
  Text,
  Button,
  useColorMode,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import StyleProps from "./components/styleprops";
import ColorMode from "./components/colormode";
import ResponsiveLayout from "./components/responsivelayout";
import Boxes from "./components/box";
import Containers from "./components/containers";
import FlexBox from "./components/flexbox";
import Grids from "./components/grid";
import Stacks from "./components/stacks";
import Wraps from "./components/wrap";
import { NavBar } from "../../components/navbar";
import { Analytics } from "@vercel/analytics/react";

// Boxes are the most abstract, they render divs
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box minW={["28em", "46em", "62em", "78em", "94em"]}>
        <Box marginTop={5}>
          <Center>
            <Heading>
              <Link href="/">Chakra UI Layout</Link>
            </Heading>
          </Center>
          <Button top={"-40px"} ml={5} onClick={toggleColorMode}>
            Toggle: {colorMode === "light" ? "dark" : "light"}
          </Button>
        </Box>
        <NavBar colorMode={colorMode} selected="Layout" />
        <StyleProps colorMode={colorMode} />
        <ColorMode colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <ResponsiveLayout colorMode={colorMode} />
        <Boxes colorMode={colorMode} />
        <Containers colorMode={colorMode} />
        <FlexBox colorMode={colorMode} />
        <Grids colorMode={colorMode} />
        <Stacks colorMode={colorMode} />
        <Wraps colorMode={colorMode} />
        <Box>
          <Text>Random Requests:</Text>
          <Text>null</Text>
        </Box>
      </Box>
      <Analytics />
    </>
  );
}

export default App;
