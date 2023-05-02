import { Box, Flex, Link, Text } from '@chakra-ui/react';

interface Props {
  colorMode: string;
}

const ResponsiveLayout = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Responsive Style / Layout
        </Text>
        <Link
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/styled-system/responsive-styles"
        >
          Documentation
        </Link>
      </Flex>
      <Text>
        Instead of manually adding @media queries, you can use array or object
        syntax to define style at different breakpoints
      </Text>
    </Box>
  );
}

export default ResponsiveLayout