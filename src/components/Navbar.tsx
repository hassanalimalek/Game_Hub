import { HStack, Image, Show, Text } from '@chakra-ui/react';
import NavLogo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';
import useGameQueryStore from '../state-management/store/store';
import { Link } from 'react-router-dom';

function Navbar() {
  const { setSearchText } = useGameQueryStore();
  return (
    <HStack padding='10px' gap={4}>
      <Link to='/'>
        <HStack padding={0}>
          <Image src={NavLogo} boxSize={'60px'} objectFit={'cover'}></Image>
          <Show above='md'>
            <Text fontWeight={'bold'} margin={'0px'} width={'130px'}>
              GameHub
            </Text>
          </Show>
        </HStack>
      </Link>

      <SearchInput onSearchSubmit={setSearchText} />

      <ThemeSwitch />
    </HStack>
  );
}

export default Navbar;
