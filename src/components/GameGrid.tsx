import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => {
              return <GameCardSkeleton key={skeleton} />;
            })
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
