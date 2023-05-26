import { HStack, Image, Text } from '@chakra-ui/react';
import NavLogo from '../assets/logo.webp';

function Navbar() {
  return (
    <HStack>
      <Image src={NavLogo} boxSize={'60px'}></Image>
      <Text>Test</Text>
    </HStack>
  );
}

export default Navbar;
