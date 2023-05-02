import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";

interface Props {
  colorMode: string;
  toggleColorMode: () => void;
}

const ColorMode = ({ colorMode, toggleColorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          ColorMode
        </Text>
        <Link
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/styled-system/color-mode"
        >
          Documentation
        </Link>
      </Flex>
      <Button onClick={toggleColorMode}>
        Toggle: {colorMode === "light" ? "dark" : "light"}
      </Button>
      <Text>
        Import "useColorMode" , and get "colorMode" and "toggleColorMode" from
        it
      </Text>
      <Text>Use the 2 objects like react hook</Text>
    </Box>
  );
};

export default ColorMode;
