import {
  Box,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";

interface Props {
  colorMode: string;
}

const Grids = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Grid
        </Text>
        <Link
          href="https://chakra-ui.com/docs/components/flex"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
        >
          Documentation
        </Link>
      </Flex>
      <Text>div with display:grid</Text>
      <Text>Requires import of Grid and GridItem</Text>
      <br />
      <Text decoration={"underline"}>Useful Props:</Text>
      <UnorderedList>
        <ListItem>
          templateColumns - Syntax: repeat(no. of column, fraction of space)
        </ListItem>
        <ListItem>
          templateRows - Syntax: repeat(no. of row, fraction of space)
        </ListItem>
        <ListItem>gap - spacing between grid items</ListItem>
        <ListItem>
          colSpan, rowSpan - how much space the item should take in the grid
          template
        </ListItem>
      </UnorderedList>
      <br />
      <Text decoration={"underline"}>Example:</Text>
      <Grid
        h={"200px"}
        gap={"10px"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem
          textAlign={"center"}
          textColor={"black"}
          colSpan={1}
          bg={"papayawhip"}
        >
          colSpan: 1
        </GridItem>
        <GridItem
          textAlign={"center"}
          textColor={"black"}
          rowSpan={2}
          colSpan={1}
          bg={"pink"}
        >
          colSpan: 1, rowSpan: 2
        </GridItem>
        <GridItem
          textAlign={"center"}
          textColor={"black"}
          colSpan={2}
          bg={"turquoise"}
        >
          colSpan: 2
        </GridItem>
        <GridItem
          textAlign={"center"}
          textColor={"black"}
          colSpan={2}
          rowSpan={1}
          bg={"tomato"}
        >
          colSpan: 2, rowSpan: 1
        </GridItem>
        <GridItem
          textAlign={"center"}
          textColor={"black"}
          colSpan={1}
          bg={"yellowgreen"}
        />
      </Grid>
      <Text>
        Notice how the item only appears when there is space available
      </Text>
      <br />
      <Text>
        Chakra also has a SimpleGrid Component you can check out{" "}
        <Link
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/components/simple-grid"
        >
          here
        </Link>
      </Text>
    </Box>
  );
};

export default Grids;
