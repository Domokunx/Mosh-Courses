import {
  Box,
  Text,
  Flex,
  Link,
  Center,
  Checkbox,
  Wrap,
  HStack,
  Select,
  Input,
  Code,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  colorMode: string;
}

const Checkboxes = ({ colorMode }: Props) => {
  const [checkboxSize, setCheckboxSize] = useState("sm");
  const [isDisabled, setDisabled] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [spacing, setSpacing] = useState(0);
  const [colorScheme, setColorScheme] = useState("blue");
  const [iconColor, setIconColor] = useState("blue");

  return (
    <Box border={"solid 1px gray"} borderRadius={"3xl"} p={"5"} m={"5"}>
      <Flex justify={"space-between"}>
        <Text fontSize={"2xl"} decoration={"underline 1px"}>
          Checkbox
        </Text>
        <Link
          target="_blank"
          color={colorMode === "light" ? "blue" : "yellowgreen"}
          href="https://chakra-ui.com/docs/components/checkbox"
        >
          Documentation
        </Link>
      </Flex>
      <br />
      <Center height={"50px"}>
        <Checkbox
          defaultChecked
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          size={checkboxSize}
          colorScheme={colorScheme}
          iconColor={iconColor}
          spacing={spacing}
        >
          Label
        </Checkbox>
      </Center>
      <Text>Customise and experiment with the props below!</Text>

      <Wrap m="20px" justify={"space-evenly"} spacing={"20px"}>
        <HStack>
          <Text>colorScheme</Text>
          <Select onChange={(e) => setColorScheme(e.target.value)} size={"md"}>
            <option value={"blue"}>blue</option>
            <option value={"gray"}>gray</option>
            <option value={"whiteAlpha"}>whiteAlpha</option>
            <option value={"blackAlpha"}>blackAlpha</option>
            <option value={"red"}>red</option>
            <option value={"orange"}>orange</option>
            <option value={"yellow"}>yellow</option>
            <option value={"green"}>green</option>
            <option value={"teal"}>teal</option>
            <option value={"cyan"}>cyan</option>
            <option value={"purple"}>purple</option>
            <option value={"pink"}>pink</option>
            <option value={"linkedin"}>linkedin</option>
            <option value={"facebook"}>facebook</option>
            <option value={"messenger"}>teal</option>
            <option value={"whatsapp"}>whatsapp</option>
            <option value={"twitter"}>twitter</option>
            <option value={"telegram"}>telegram</option>
          </Select>
        </HStack>

        <HStack>
          <Text>iconColor</Text>
          <Select onChange={(e) => setIconColor(e.target.value)} size={"md"}>
            <option value={"blue"}>blue</option>
            <option value={"gray"}>gray</option>
            <option value={"whiteAlpha"}>whiteAlpha</option>
            <option value={"blackAlpha"}>blackAlpha</option>
            <option value={"red"}>red</option>
            <option value={"orange"}>orange</option>
            <option value={"yellow"}>yellow</option>
            <option value={"green"}>green</option>
            <option value={"teal"}>teal</option>
            <option value={"cyan"}>cyan</option>
            <option value={"purple"}>purple</option>
            <option value={"pink"}>pink</option>
            <option value={"linkedin"}>linkedin</option>
            <option value={"facebook"}>facebook</option>
            <option value={"messenger"}>teal</option>
            <option value={"whatsapp"}>whatsapp</option>
            <option value={"twitter"}>twitter</option>
            <option value={"telegram"}>telegram</option>
          </Select>
        </HStack>

        <HStack>
          <Text>spacing</Text>
          <Input
            width={"5ch"}
            onChange={(e) => setSpacing(parseInt(e.target.value))}
            type="number"
            placeholder="0"
          ></Input>
        </HStack>

        <HStack>
          <Text>size:</Text>
          <Select onChange={(e) => setCheckboxSize(e.target.value)} size={"md"}>
            <option value={"sm"}>sm</option>
            <option value={"md"}>md</option>
            <option value={"lg"}>lg</option>
          </Select>
        </HStack>

        <HStack>
          <Text>isDisabled</Text>
          <Select
            onChange={(e) =>
              setDisabled(parseInt(e.target.value) === 0 ? false : true)
            }
            size={"md"}
          >
            <option value={0}>false</option>
            <option value={1}>true</option>
          </Select>
        </HStack>

        <HStack>
          <Text>isInvalid</Text>
          <Select
            onChange={(e) =>
              setInvalid(parseInt(e.target.value) === 0 ? false : true)
            }
            size={"md"}
          >
            <option value={0}>false</option>
            <option value={1}>true</option>
          </Select>
        </HStack>
      </Wrap>

      <Code
        children={`<Checkbox
          defaultChecked
          isDisabled="${isDisabled}"
          isInvalid="${isInvalid}"
          size="${checkboxSize}"
          colorScheme="${colorScheme}"
          iconColor="${iconColor}"
          spacing="${spacing}"
        >
          Label
        </Checkbox>`}
      />
    </Box>
  );
};

export default Checkboxes;
