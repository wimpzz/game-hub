import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px" height="370px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <HStack>
          <SkeletonCircle size="5" marginTop={1} marginBottom={1} />
          {/* <SkeletonCircle
            size="5"
            marginTop={1}
            marginBottom={1}
            borderRadius={2}
          /> */}
        </HStack>

        <SkeletonText
          startColor="gray.500"
          endColor="gray.200"
          mt="8"
          noOfLines={2}
          skeletonHeight="5"
          marginRight={4}
        />
        {/*<SkeletonText width="250px" />*/}
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
