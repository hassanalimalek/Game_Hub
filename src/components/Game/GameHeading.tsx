import { Box, Heading } from '@chakra-ui/react';
import { useCallback } from 'react';
import useGenres from '../../hooks/useGenres';
import usePlatforms from '../../hooks/usePlatform';
import useGameQueryStore from '../../state-management/store/store';

function GameHeading() {
  const { gameQuery } = useGameQueryStore();
  const { data: genreResults } = useGenres();
  const { data: platformResults } = usePlatforms();

  const getGenre = useCallback(() => {
    return (
      genreResults &&
      genreResults?.results?.find((platFormResult: any) => {
        return platFormResult.id === gameQuery.genre;
      })
    );
  }, [gameQuery?.genreId]);
  const getPlatform = useCallback(() => {
    return platformResults?.results?.find((platFormResult: any) => {
      return platFormResult.id === gameQuery.platform;
    });
  }, [gameQuery?.platformId]);
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
