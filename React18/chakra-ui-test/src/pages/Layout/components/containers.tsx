import { Box, Text, Flex, Link, Highlight, VStack, Center, Container } from '@chakra-ui/react';

interface Props {
    colorMode: string,
}
const Containers = ({ colorMode }: Props) => {
  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Container
        </Text>
        <Link
          href="https://chakra-ui.com/docs/components/container"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
        >
          Documentation
        </Link>
      </Flex>
      <Text>
        Containers are used to constrain a content's width to the current
        breakpoint, while keeping it fluid.
      </Text>
      <Text>
        <Highlight
          query={"maxWidth"}
          styles={{ px: "1", py: "1", bg: "yellowgreen" }}
        >
          By default, max width is set to 60 characters, can be customised with
          maxWidth
        </Highlight>
      </Text>
      <br />
      <hr />
      <Text decoration={"underline 1px"}>Example:</Text>
      <VStack>
        <Center>Default Container (60ch)</Center>
        <Container border={"1px gray solid"} p={"4"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          rem ipsa, repudiandae cumque esse quod ea vel officia sit, dicta nobis
          possimus nostrum! Omnis laboriosam ut culpa deleniti voluptatibus
          ipsam.
        </Container>
        <Center>Container with maxW 120ch</Center>
        <Container border={"1px gray solid"} p={"4"} maxWidth={"120ch"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eos
          corrupti expedita error aliquam, ducimus ut totam doloremque aut
          temporibus deleniti ipsam. Laborum, placeat possimus! Nesciunt iure
          animi est quae.
        </Container>
      </VStack>
      <br />
      <hr />
      <Text decoration={"underline 1px"}>Container common props:</Text>
      <Text>
        padding: 16px
        <br />
        container.sm: 640px
        <br />
        container.md: 768px
        <br />
        container.lg: 1024px
        <br />
        container.xl: 1280px
      </Text>
    </Box>
  );
}

export default Containers