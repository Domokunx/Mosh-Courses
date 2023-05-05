import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Flex,
  Link,
  Editable,
  EditablePreview,
  EditableInput,
  Center,
  Code,
  EditableTextarea,
  useEditableControls,
  IconButton,
} from "@chakra-ui/react";

interface Props {
  colorMode: string;
}
const Editables = ({ colorMode }: Props) => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <Flex mt={"10px"} gap={"10px"} justifyContent="center">
        <IconButton
          size={"sm"}
          aria-label="submit button"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          size={"sm"}
          aria-label="cancel button"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </Flex>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="editable text"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <Box border={"solid 1px gray"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Editable fontSize={"2xl"} defaultValue="Editable (literally)">
          <EditablePreview textDecoration={"underline 1px"} />
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
      <Center>
        <Editable
          fontSize={"4xl"}
          defaultValue="Editable Input (click to edit)"
        >
          <EditablePreview textDecoration={"underline 1px"} />
          <EditableInput />
        </Editable>
      </Center>
      <br />
      <Code width={"full"}>
        {`<Editable fontSize={"4xl"} defaultValue="Editable Input (click to edit)"`}{" "}
        <br />
        {`<EditablePreview textDecoration={"underline 1px"}/`} <br />
        {`<EditableInput /`} <br />
        {`</Editable>`}
      </Code>
      <br />
      <Center>
        <Editable
          fontSize={"4xl"}
          defaultValue="Editable TextArea (click to edit)"
        >
          <EditablePreview textDecoration={"underline 1px"} />
          <EditableTextarea />
        </Editable>
      </Center>
      <br />
      <Code width={"full"}>
        {`<Editable fontSize={"4xl"} defaultValue="Editable TextArea (click to edit)">`}{" "}
        <br />
        {`<EditablePreview textDecoration={"underline 1px"}/>`} <br />
        {`<EditableTextArea />`} <br />
        {`</Editable>`}
      </Code>
      <br />
      <br />
      <Text fontSize={"2xl"} decoration={"underline"}>
        Custom Editable Controls
      </Text>
      <Text>Import useEditableControls</Text>
      <Text>Gives you control on how to access the editable</Text>
      <br />
      <Center>
        <Editable
          isPreviewFocusable={false}
          defaultValue="Editable with custom controls"
        >
          <EditablePreview />
          <EditableInput />
          <EditableControls />
        </Editable>
      </Center>
      <br />
      <Text fontSize={"xl"}>Create a custom component that has 2 states </Text>
      <Text>(isEditing === true & isEditing === false)</Text>
      <Code width={"full"}>
        {`function EditableControls() {`} <br />
        {`const {`} <br />
        {`isEditing,`} <br />
        {`getSubmitButtonProps,`} <br />
        {`getCancelButtonProps,`} <br />
        {`getEditButtonProps,`} <br />
        {`} = useEditableControls();`} <br />
        <br />
        // Below is where you can add custom controls
        <br />
        {`return isEditing ? (`} <br />
        {`<Flex mt={"10px"} gap={"10px"} justifyContent="center">`} <br />
        {`<IconButton`} <br />
        {`size={"sm"}`} <br />
        {`aria-label="submit button"`} <br />
        {`icon={<CheckIcon />}`} <br />
        {`{...getSubmitButtonProps()}`} <br />
        {`/>`} <br />
        {`<IconButton`} <br />
        {`size={"sm"}`} <br />
        {`aria-label="cancel button"`} <br />
        {`icon={<CloseIcon />}`} <br />
        {`{...getCancelButtonProps()}`} <br />
        {`/>`} <br />
        {`</Flex>`} <br />
        {`) : (`} <br />
        {`<Flex justifyContent="center">`} <br />
        {`<IconButton`} <br />
        {`aria-label="editable text"`} <br />
        {`size="sm"`} <br />
        {`icon={<EditIcon />}`} <br />
        {`{...getEditButtonProps()}`} <br />
        {`/>`} <br />
        {`</Flex>`} <br />
        {`);`} <br />
        {`}`} <br />
      </Code>
      <br />
      <br />
      <Text fontSize={"xl"}>Afterwards, add it at the end of editable component</Text>
      <Code width={"full"}>
        {`<Editable fontSize={"4xl"} defaultValue="Editable TextArea (click to edit)">`}{" "}
        <br />
        {`<EditablePreview textDecoration={"underline 1px"}/>`} <br />
        {`<EditableInput />`} <br />
        {`<EditableControls />`} {`<`}----Here!! <br />
        {`</Editable>`}
      </Code>
    </Box>
  );
};

export default Editables;
