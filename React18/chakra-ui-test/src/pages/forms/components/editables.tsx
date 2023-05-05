import {
  Box,
  Text,
  Flex,
  Link,
  Center,
  Button,
  Wrap,
  HStack,
  Select,
  Input,
  Code,
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";

interface Props {
  colorMode: string;
}
const Editables = ({ colorMode }: Props) => {
  return (
    <Box border={"solid 1px gray"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Editable fontSize={"2xl"} defaultValue="Editable (literally)">
          <EditablePreview textDecoration={"underline 1px"}/>
          <EditableInput />
        </Editable>
        <Link
          target="_blank"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/components/editable"
        >
          Documentation
        </Link>
      </Flex>
      <br />
    </Box>
  );
};

export default Editables;
