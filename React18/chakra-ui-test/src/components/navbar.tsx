import { Flex, Link } from "@chakra-ui/react";

interface Props {
  selected: string;
  colorMode: string;
}
export const NavBar = ({ selected, colorMode }: Props) => {
  const pages = ["Layout", "Forms", "Themes"];
  return (
    <Flex p={5} borderBottom={"solid 1px gray"} justify={"space-evenly"}>
      {pages.map((page, index) => (
        <Link key={index}
          color={
            selected === page
              ? colorMode === "dark"
                ? "yellowgreen"
                : "blue"
              : colorMode === "dark"
              ? "white"
              : "black"
          }
          href={"/" + page + "/index.html"}
        >
          {page}
        </Link>
      ))}
    </Flex>
  );
};
