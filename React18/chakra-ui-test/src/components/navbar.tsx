import { Flex, Link } from '@chakra-ui/react'

interface Props {
  selected: string
}
export const NavBar = ({ selected }: Props) => {
  return (
    <Flex p={5} borderBottom={"solid 1px gray"} justify={"space-evenly"}>
      <Link color={selected === "Layout" ? "yellowgreen" : "white"} href='/Layout/index.html'>Layout</Link>
      <Link color={selected === "Forms" ? "yellowgreen" : "white"} href="/forms/index.html">Forms</Link>
    </Flex>
  );
}
