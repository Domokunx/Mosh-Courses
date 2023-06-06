import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import ColorModeSwitch from "./colormodeswitch"
import SearchInput from "./searchinput"

const Navbar = () => {
  return (
    <HStack p={"10px"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar