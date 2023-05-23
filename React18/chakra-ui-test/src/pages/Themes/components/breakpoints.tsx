import { useColorMode, Flex, Link, Text, Box } from '@chakra-ui/react';

const Breakpoints = () => {
  const { colorMode } = useColorMode();
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Breakpoints
        </Text>
        <Link
          target="_blank"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/styled-system/responsive-styles"
        >
          Documentation
        </Link>
      </Flex>
    </Box>
  );
}

export default Breakpoints