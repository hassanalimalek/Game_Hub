import { HStack, Image, Show, Text } from '@chakra-ui/react';
import NavLogo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';
import SearchInput from './SearchInput';

function Navbar({ onSearchSubmit }: any) {
  console.log('onSearchSubmit --', onSearchSubmit);
  return (
    <HStack padding='10px' gap={4}>
      <HStack padding={0}>
        <Image
          src={NavLogo}
          boxSize={'60px'}
          width={{ base: '120px', sm: '100px', md: '60px' }}
        ></Image>
        <Show above='md'>
          <Text fontWeight={'bold'} margin={'0px'} width={'130px'}>
            GameHub
          </Text>
        </Show>
      </HStack>
      <SearchInput onSearchSubmit={onSearchSubmit} />

      <ThemeSwitch />
    </HStack>
  );
}

export default Navbar;
