import { Card, CardBody, Image, SkeletonText } from "@chakra-ui/react";
import face from "../assets/Screenshot_20230128_113743.png"

const GameCardSkeleton = () => {
  return (
    <Card>
      <Image src={face} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
