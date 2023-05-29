import { Card, CardBody, HStack, Heading, Icon, Image } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { Game } from "../hooks/useGames";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,

} from "react-icons/fa";
import { IconType } from "react-icons";
import CriticScore from "./criticscore";
import getCroppedImage from "../services/imageURL";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
  };

  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} alt={"Image of " + game.name} />
      <CardBody>
        <Heading fontSize={{ base: "xl", lg: "2xl" }}>{game.name}</Heading>
        <HStack my={1} justify={"space-between"}>
            <HStack>
          {game.parent_platforms.map(({ platform }) => (
            <Icon
              color={"gray.500"}
              key={platform.id}
              as={iconMap[platform.slug]}
            />
          ))}</HStack>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
