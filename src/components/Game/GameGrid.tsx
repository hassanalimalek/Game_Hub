import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { IGenres } from '../../hooks/useGenres';
import { IPlatforms } from '../../hooks/usePlatform';

interface Props {
  gameQuery: {
    genre: IGenres | null;
    platform: IPlatforms | null;
  };
}
function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  if (isLoading) {
    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => {
          return <GameCardSkeleton key={skeleton} />;
        })}
      </SimpleGrid>
    );
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  if (games.length === 0) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} height='50vh'>
        <Heading size={'lg'} textAlign={'center'}>
          No games found
        </Heading>
      </Flex>
    );
  }
  return (
    <Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default GameGrid;
