import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { BsChevronCompactDown } from "react-icons/bs";

interface Props {
  selectedSortOrder: SortOrder | null;
  onSelectSortOrder: (sortOrder: SortOrder) => void;
}

export interface SortOrder {
  value: string;
  label: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Box mx={5}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
          {selectedSortOrder?.label ? "Sort by: " + selectedSortOrder.label : "Sort by: Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((sort) => (
            <MenuItem
              onClick={() => onSelectSortOrder(sort)}
              key={sort.value}
              value={sort.value}
            >
              {sort.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
