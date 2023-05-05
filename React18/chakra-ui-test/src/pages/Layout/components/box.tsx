import { Flex, Link, Box, Text } from "@chakra-ui/react";

interface Props {
    colorMode: string;
}
const Boxes = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Box
        </Text>
        <Link
          target="_blank"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/components/box/usage"
        >
          Documentation
        </Link>
      </Flex>
      <Box>Boxes are just divs, but with chakra, are easier to style</Box>
    </Box>
  );
}

export default Boxes