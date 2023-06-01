import { Box, Button, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { IGenres } from '../../hooks/useGenres';
import { IPlatforms } from '../../hooks/usePlatform';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGameQueryStore from '../../state-management/store/store';
interface Props {
  gameQuery: {
    genre: IGenres | null;
    platform: IPlatforms | null;
  };
}
function GameGrid() {
  const { gameQuery } = useGameQueryStore();

  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
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
    return <Text>{error?.message}</Text>;
  }
  if (games?.pages?.length === 0) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} height='50vh'>
        <Heading size={'lg'} textAlign={'center'}>
          No games found
        </Heading>
      </Flex>
    );
  }
  const fetchedGamesCount = games.pages.reduce(
    (total, currPage) => total + currPage.results.length,
    0
  );
  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedGamesCount} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage as boolean}
        loader={
          <Flex alignItems='center' justifyContent={'center'} marginY={6}>
            <Spinner />
          </Flex>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {games?.pages?.map((page) => {
            return page?.results?.map((game: any) => (
              <GameCard key={game.id} game={game} />
            ));
          })}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
}

export default GameGrid;
