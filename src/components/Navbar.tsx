import { HStack, Image, Text } from '@chakra-ui/react';
import NavLogo from '../assets/logo.webp';
import ThemeSwitch from './ThemeSwitch';

function Navbar() {
  return (
    <HStack justifyContent={'space-between'} padding='10px'>
      <Image src={NavLogo} boxSize={'60px'}></Image>
      <ThemeSwitch></ThemeSwitch>
    </HStack>
  );
}

export default Navbar;
