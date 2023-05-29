import { Box, Heading } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import GetQueryData from '../../services/getQueryData';

function GameHeading({ gameQuery }: any) {
  const genreResults = GetQueryData(['genres']);
  const platformResults = GetQueryData(['platforms']);

  const getGenre = useCallback(() => {
    return genreResults?.find((platFormResult: any) => {
      return platFormResult.id === gameQuery.genre;
    });
  }, [gameQuery?.genre]);
  const getPlatform = useCallback(() => {
    return platformResults?.find((platFormResult: any) => {
      return platFormResult.id === gameQuery.platform;
    });
  }, [gameQuery?.platform]);
  const genre = getGenre();
  const platform = getPlatform();

  const title =
    (platform?.name ? platform?.name + ' ' : '') +
    (genre?.name || '') +
    ' Games';

  return (
    <Box>
      <Heading as='h1'>{title}</Heading>
    </Box>
  );
}

export default GameHeading;
