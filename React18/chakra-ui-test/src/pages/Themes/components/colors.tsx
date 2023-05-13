import { Box, Code, Flex, Link, Text, useColorMode } from '@chakra-ui/react'

const Colors = () => {
    const {colorMode} = useColorMode();

  return (
    <Box border={"1px gray solid"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Colors
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
        Add a theme.colors object to provide colors for your project. By default
        these colors can be referenced by the color, borderColor,
        backgroundColor, fill, stroke, styles.
      </Box>
      <br />
      <Box>
        We recommend adding a palette that ranges from 50 to 900. Tools like{" "}
        <Link
          textDecor={"underline"}
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          _active={{ color: "green" }}
          target="_blank"
          href="https://themera.vercel.app"
        >
          Themera
        </Link>
        ,{" "}
        <Link
          textDecor={"underline"}
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          _active={{ color: "green" }}
          target="_blank"
          href="https://smart-swatch.netlify.app"
        >
          Smart Swatch
        </Link>
        ,{" "}
        <Link
          textDecor={"underline"}
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          _active={{ color: "green" }}
          target="_blank"
          href="https://coolors.co/generate"
        >
          Coolors
        </Link>{" "}
        or{" "}
        <Link
          textDecor={"underline"}
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          _active={{ color: "green" }}
          target="_blank"
          href="https://palx.jxnblk.com"
        >
          Palx
        </Link>{" "}
        are available to generate these palettes.
      </Box>

      <Code width={"full"}>
        {"// theme.js"} <br />
        {"export default {"} <br />
        {"colors: {"} <br />
        {"// Define custom color below"} <br />
        {"transparent: 'transparent',"} <br />
        {"black: '#000',"} <br />
        {"white: '#fff',"} <br />
        {"gray: {"} <br />
        {"  50: '#f7fafc',"} <br />
        {"  // ..."} <br />
        {"  900: '#171923',"} <br />
        {"},"} <br />
        {"// Other custom props..."} <br />
        {"},"} <br />
        {"}"}
      </Code>
    </Box>
  );
}

export default Colors