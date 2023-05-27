import {
  Box,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { IGenres } from '../../hooks/useGenres';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { IPlatforms } from '../../hooks/usePlatform';

interface Props {
  gameQuery: {
    genre: IGenres | null;
    platform: IPlatforms | null;
  };
  selectPlatform: (platform: IPlatforms) => void;
}
function GameGrid({ gameQuery, selectPlatform }: Props) {
  const { data: platforms } = usePlatforms();
  const { data: games, error, isLoading } = useGames(gameQuery);
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <Box padding={10}>
      <Menu>
        <MenuButton marginBottom={4} as={Button} rightIcon={<BsChevronDown />}>
          {gameQuery?.platform ? gameQuery.platform?.name : 'Select Platform'}
        </MenuButton>
        <MenuList>
          {platforms &&
            platforms.map((platform) => {
              return (
                <MenuItem onClick={() => selectPlatform(platform)}>
                  {platform.name}
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => {
              return <GameCardSkeleton key={skeleton} />;
            })
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </Box>
  );
}

export default GameGrid;
