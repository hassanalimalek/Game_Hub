import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { IPlatforms } from '../hooks/usePlatform';
import { IGenres } from '../hooks/useGenres';
import GetQueryData from '../services/getQueryData';
import { useCallback } from 'react';

interface Props {
  gameQuery?: {
    genre: IGenres | null;
    platform: IPlatforms | null;
    sortOrder: any | null;
  };
  setGameQuery: (gameQuery: any) => void;
}
function Filters({ gameQuery, setGameQuery }: Props) {
  const { data: platforms } = usePlatforms();

  const sortOrder = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const platformResults = GetQueryData(['platforms']);

  const getPlatform = useCallback(() => {
    return platformResults?.find((platFormResult: any) => {
      return platFormResult.id === gameQuery?.platform;
    });
  }, [gameQuery?.platform]);

  const platform = getPlatform();

  return (
    <HStack gap={2} paddingY={5}>
      {/* Platform Selector */}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform ? platform?.name : 'Select Platform'}
        </MenuButton>
        <MenuList>
          {platforms &&
            platforms?.results?.map((platform: any) => {
              return (
                <MenuItem
                  key={platform.id}
                  onClick={() =>
                    setGameQuery({ ...gameQuery, platform: platform.id })
                  }
                >
                  {platform.name}
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
      {/* Sorting */}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {`Sort By : ${
            gameQuery?.sortOrder ? gameQuery?.sortOrder?.label : 'Relevance'
          }`}
        </MenuButton>
        <MenuList>
          {sortOrder &&
            sortOrder.map((sort) => {
              return (
                <MenuItem
                  key={sort.value}
                  onClick={() =>
                    setGameQuery({ ...gameQuery, sortOrder: sort })
                  }
                >
                  {sort.label}
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default Filters;
