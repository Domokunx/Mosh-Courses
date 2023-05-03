import { Box, Button, Center, Code, Flex, HStack, Input, Link, Select, Text, Wrap } from "@chakra-ui/react"
import { useState } from "react";

interface Props {
    colorMode: string
}

const Buttons = ({ colorMode }: Props) => {
    const [buttonSize, setButtonSize] = useState("xs")
    const [buttonVariant, setButtonVariant] = useState("solid")
    const [isLoading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [colorScheme, setColorScheme] = useState("gray")

    return (
      <Box border={"solid 1px gray"} borderRadius={"3xl"} p={"5"} m={"5"}>
        <Flex justify={"space-between"}>
          <Text fontSize={"2xl"} decoration={"underline 1px"}>
            Buttons
          </Text>
          <Link
            color={colorMode === "light" ? "blue" : "yellowgreen"}
            href="https://chakra-ui.com/docs/components/button/props"
          >
            Documentation
          </Link>
        </Flex>
        <br />
        <Center height={"50px"}>
          <Button
            isLoading={isLoading}
            size={buttonSize}
            variant={buttonVariant}
            loadingText={loadingText}
            colorScheme={colorScheme}
          >
            Click me!
          </Button>
        </Center>
        <Text>Customise and experiment with the props below!</Text>

        <Wrap m="20px" justify={"space-evenly"}>
          <HStack>
            <Text>colorScheme</Text>
            <Select
              onChange={(e) => setColorScheme(e.target.value)}
              size={"md"}
            >
              <option value={"gray"}>gray</option>
              <option value={"whiteAlpha"}>whiteAlpha</option>
              <option value={"blackAlpha"}>blackAlpha</option>
              <option value={"red"}>red</option>
              <option value={"orange"}>orange</option>
              <option value={"yellow"}>yellow</option>
              <option value={"green"}>green</option>
              <option value={"teal"}>teal</option>
              <option value={"blue"}>blue</option>
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
            <Text>size:</Text>
            <Select onChange={(e) => setButtonSize(e.target.value)} size={"md"}>
              <option value={"xs"}>xs</option>
              <option value={"sm"}>sm</option>
              <option value={"md"}>md</option>
              <option value={"lg"}>lg</option>
            </Select>
          </HStack>

          <HStack>
            <Text>variant</Text>
            <Select
              onChange={(e) => setButtonVariant(e.target.value)}
              size={"md"}
            >
              <option value={"solid"}>solid</option>
              <option value={"ghost"}>ghost</option>
              <option value={"outline"}>outline</option>
              <option value={"link"}>link</option>
              <option value={"unstyled"}>unstyled</option>
            </Select>
          </HStack>

          <HStack>
            <Text>isLoading</Text>
            <Select
              onChange={(e) =>
                setLoading(parseInt(e.target.value) === 0 ? false : true)
              }
              size={"md"}
            >
              <option value={0}>false</option>
              <option value={1}>true</option>
            </Select>
          </HStack>

          <HStack>
            <Text>loadingText</Text>
            <Input
              onChange={(e) => setLoadingText(e.target.value)}
              placeholder="Shown if isLoading true"
            ></Input>
          </HStack>
        </Wrap>
        
        <Code children={`<Button 
            isLoading="${isLoading}" 
            size="${buttonSize}"
            variant="${buttonVariant}"
            loadingText="${loadingText}"
            colorScheme="${colorScheme}"
          >
            Click me!
          </Button>`}/>
      </Box>
    );
}

export default Buttons