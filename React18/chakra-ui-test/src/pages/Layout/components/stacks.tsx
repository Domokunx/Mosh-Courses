import {
  Box,
  Text,
  Flex,
  Link,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
  Container,
  StackDivider,
} from "@chakra-ui/react";

interface Props {
  colorMode: string;
}

const Stacks = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Stack, VStack & HStack
        </Text>
        <Link
          target="_blank"
          href="https://chakra-ui.com/docs/components/stack"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
        >
          Documentation
        </Link>
      </Flex>

      <Text>
        Stack is a layout component used to group elements together and apply a
        space between them.
      </Text>
      <Text>
        VStack for vertical layout, HStack for horizontal layout, Stack for
        combination
      </Text>
      <br />
      <Text>Useful Props</Text>
      <UnorderedList>
        <ListItem>
          spacing - determines space between components in stack
        </ListItem>
        <ListItem>
          width, height - chakra has a reserved value "full" for 100%
        </ListItem>
        <ListItem>
          divider - pass a component to this prop and it will appear between
          every stack item (note: it also has spacing)
        </ListItem>
      </UnorderedList>
      <br />
      <Text decoration={"underline"}>VStack Example:</Text>
      <UnorderedList>
        <ListItem>spacing: 50px</ListItem>
      </UnorderedList>
      <VStack spacing="50px">
        <Container textAlign={"center"} border={"gray 1px solid"}>
          Container 1
        </Container>
        <Container textAlign={"center"} border={"gray 1px solid"}>
          Container 2
        </Container>
        <Container textAlign={"center"} border={"gray 1px solid"}>
          Container 3
        </Container>
      </VStack>
      <br />
      <Text decoration={"underline"}>HStack Example:</Text>
      <UnorderedList>
        <ListItem>spacing: 20px</ListItem>
      </UnorderedList>
      <HStack
        divider={<StackDivider borderColor={"pink.50"} />}
        spacing={"20px"}
      >
        <Container textAlign={"center"} border={"gray 1px solid"}>
          Container 1
        </Container>
        <Container textAlign={"center"} border={"gray 1px solid"}>
          Container 2
        </Container>
        <Container textAlign={"center"} border={"gray 1px solid"}>
          Container 3
        </Container>
        <Text>Note: It might overflow, dividers also count as components</Text>
      </HStack>
      <br />
      <Text decoration={"underline"}>Stack Dividers</Text>
      <Text>
        Optional Component you can pass as to the "divider" prop that acts like
        a line break
      </Text>
      <br />
      <Text decoration={"underline"}>Stacks vs Flex</Text>
      <Text>
        Stacks do not follow its containers width (overflow), FlexBoxes do
      </Text>
    </Box>
  );
};

export default Stacks;
