import { Box, Flex, Link, useColorMode, Text, ListItem, UnorderedList } from "@chakra-ui/react";

const Typography = () => {
  const { colorMode } = useColorMode();
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Typography
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
        5 keys are customisable:
        <UnorderedList>
          <ListItem>fonts (font families)</ListItem>
          <ListItem>fontSizes</ListItem>
          <ListItem>fontWeights</ListItem>
          <ListItem>lineHeights</ListItem>
          <ListItem>letterSpacings</ListItem>
        </UnorderedList>
      </Box>
      <br />
      <Box>You can add custom names to attributes for easier use in the future</Box>
    </Box>
  );
}

export default Typography