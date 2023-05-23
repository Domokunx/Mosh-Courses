import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/react.svg"
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