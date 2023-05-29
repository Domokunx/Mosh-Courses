import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import ColorModeSwitch from "./colormodeswitch"

const Navbar = () => {
  return (
    <HStack justify={"space-between"} p={"10px"}>
        <Image src={logo} boxSize={"60px"} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar