import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react"
import logo from "../assets/react.svg"

const Navbar = () => {
    const { toggleColorMode } = useColorMode();
  return (
    <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text>NavBar</Text>
        <Button onClick={toggleColorMode}> Color Scheme</Button>
    </HStack>
  )
}

export default Navbar