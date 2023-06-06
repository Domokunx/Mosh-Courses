import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronCompactDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform , selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
