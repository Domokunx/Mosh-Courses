import { Box, Flex, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';

interface Props {
    colorMode: string
}

const StyleProps = ({ colorMode }: Props) => {
    return (
        <Box border={"1px gray solid"} borderRadius={"3xl"} padding={"5"} m={"5"}>
            <Flex justify={"space-between"}>
                <Text fontSize={"2xl"} decoration={"underline 1px"}>
                    Style Props*
                </Text>
                <Link
                    color={colorMode === "light" ? "blue" : "yellowgreen"}
                    href="https://chakra-ui.com/docs/styled-system/style-props"
                >
                    Documentation
                </Link>
            </Flex>
            <Text>
                The default props you need to know before you can style (please read
                documentation)
            </Text>
            <Text>Pseudo Props: (basically replace prefix with underscore)</Text>
            <UnorderedList>
                <ListItem>:hover = _hover</ListItem>
                <ListItem>:active = _active</ListItem>
                <ListItem>:focus = _focus</ListItem>
            </UnorderedList>
        </Box>
    );
}

export default StyleProps