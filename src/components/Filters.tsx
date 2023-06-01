import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatform';
import { useCallback } from 'react';
import useGameQueryStore from '../state-management/store/store';

function Filters() {
  const { gameQuery, setPlatformId, setSortOrder } = useGameQueryStore();
  const { data: platforms } = usePlatforms();

  const sortOrder = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const getPlatform = useCallback(() => {
    return platforms?.results?.find((platFormResult: any) => {
      return platFormResult.id === gameQuery?.platformId;
    });
  }, [gameQuery?.platformId]);
  const getSortBy = useCallback(() => {
    return sortOrder?.find((platFormResult: any) => {
      return platFormResult.value === gameQuery?.sortOrder;
    });
  }, [gameQuery?.sortOrder]);

  const platform = getPlatform();
  const sortBy = getSortBy();

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
                  onClick={() => setPlatformId && setPlatformId(platform.id)}
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
          {`Sort By : ${sortBy ? sortBy?.label : 'Relevance'}`}
        </MenuButton>
        <MenuList>
          {sortOrder &&
            sortOrder.map((sort) => {
              return (
                <MenuItem
                  key={sort.value}
                  onClick={() => setSortOrder && setSortOrder(sort?.value)}
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
