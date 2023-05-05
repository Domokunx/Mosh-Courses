import { Box, Text, Flex, Link } from "@chakra-ui/react";

interface Props {
    colorMode: string
}

const FormControls = ({ colorMode }: Props) => {
  return (
    <Box border={"solid 1px gray"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Form Control
        </Text>
        <Link
          target="_blank"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/components/form-control"
        >
          Documentation
        </Link>
      </Flex>
      <Text>Provides context such as 'isInvalid', 'isDisabled', and 'isRequired' to form elements</Text>
    </Box>
  );
}

export default FormControls