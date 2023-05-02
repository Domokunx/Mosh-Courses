import { Flex, Link, Box, Text, UnorderedList, ListItem, Center, Wrap, WrapItem } from '@chakra-ui/react';

interface Props {
    colorMode: string
}

const Wraps = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Wrap
        </Text>
        <Link
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/components/wrap"
        >
          Documentation
        </Link>
      </Flex>
      <Box>Wraps are like flexboxes with spacing support</Box>
      <Text>Useful Props:</Text>
      <UnorderedList>
        <ListItem>align - change alignment along the cross-axis (V.align)</ListItem>
        <ListItem>justify - change alignment along the main-axis (H.align)</ListItem>
      </UnorderedList>
      <br />
      <Text decoration={"underline"}>Example: (align='center')</Text>
      <Wrap spacing="30px" align="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <br />
      <Text decoration={"underline"}>Example: (justify='center')</Text>
      <Wrap spacing="30px" justify="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default Wraps