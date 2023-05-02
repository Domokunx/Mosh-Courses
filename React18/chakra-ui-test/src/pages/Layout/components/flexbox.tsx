import { Box, Text, Flex, Link, UnorderedList, ListItem } from '@chakra-ui/react';

interface Props {
    colorMode: string;
}

const FlexBox = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Flex
        </Text>
        <Link
          href="https://chakra-ui.com/docs/components/flex"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
        >
          Documentation
        </Link>
      </Flex>
      <Text>A Box Component with display: flex</Text>
      <Text>Useful shorthand props:</Text>
      <UnorderedList>
        <ListItem>flexDirection is direction</ListItem>
        <ListItem>flexWrap is wrap </ListItem>
        <ListItem>flexBasis is basis</ListItem>
        <ListItem>flexGrow is grow</ListItem>
        <ListItem>flexShrink is shrink</ListItem>
        <ListItem>alignItems is align</ListItem>
        <ListItem>justify is justify</ListItem>
      </UnorderedList>
    </Box>
  );
}

export default FlexBox