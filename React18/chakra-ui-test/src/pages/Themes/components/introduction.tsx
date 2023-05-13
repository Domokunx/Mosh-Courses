import { Flex, Link, Box, useColorMode, Text, List, ListItem } from '@chakra-ui/react';

const Introduction = () => {
    const {colorMode} = useColorMode();
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Default Theme
        </Text>
        <Link
          target="_blank"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/styled-system/theme"
        >
          Documentation
        </Link>
      </Flex>
      <Box>
        The theme object is where you define your application's color palette,
        type scale, font stacks, breakpoints, border radius values, and more.
      </Box>
      <br />
      <Box>
        Theming with Chakra UI is based on the{" "}
        <Link
          textDecor={"underline"}
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          _active={{ color: "green" }}
          target="_blank"
          href="https://styled-system.com/theme-specification/"
        >
          Styled System Theme Specification
        </Link>
      </Box>
      <br />
      <List>
        <ListItem>Create "theme.ts" file in src directory</ListItem>
        <ListItem>
          Import it into main.tsx, and add it as a prop to ChakraProvider
        </ListItem>
      </List>
    </Box>
  );
}

export default Introduction