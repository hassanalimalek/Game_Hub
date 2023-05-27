import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GameCardSkeleton() {
  return (
    <Card width={'300px'} maxWidth={'99%'} overflow={'hidden'} rounded={'md'}>
      <Skeleton height={'200px'}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
