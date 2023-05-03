import { Flex, Link } from "@chakra-ui/react";

interface Props {
  selected: string;
  colorMode: string;
}
export const NavBar = ({ selected, colorMode }: Props) => {
  return (
    <Flex p={5} borderBottom={"solid 1px gray"} justify={"space-evenly"}>
      <Link
        color={
          selected === "Layout"
            ? colorMode === "dark"
              ? "yellowgreen"
              : "blue"
            : colorMode === "dark"
            ? "white"
            : "black"
        }
        href="/Layout/index.html"
      >
        Layout
      </Link>
      <Link
        color={
          selected === "Forms"
            ? colorMode === "dark"
              ? "yellowgreen"
              : "blue"
            : colorMode === "dark"
            ? "white"
            : "black"
        }
        href="/forms/index.html"
      >
        Forms
      </Link>
    </Flex>
  );
};
