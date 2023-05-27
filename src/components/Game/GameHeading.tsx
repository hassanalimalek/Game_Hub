import { Box, Heading } from '@chakra-ui/react';

function GameHeading({ gameQuery }: any) {
  const title =
    (gameQuery?.platform?.name ? gameQuery?.platform?.name + ' ' : '') +
    (gameQuery?.genre?.name || '') +
    ' Games';

  return (
    <Box>
      <Heading as='h1'>{title}</Heading>
    </Box>
  );
}

export default GameHeading;
