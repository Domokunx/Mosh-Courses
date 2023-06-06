import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import ColorModeSwitch from "./colormodeswitch"
import SearchInput from "./searchinput"

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack p={"10px"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar