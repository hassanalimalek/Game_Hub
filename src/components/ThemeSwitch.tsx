import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react';
import React from 'react';

function ThemeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={'nowrap'}>
        {colorMode !== 'dark' ? 'Dark' : 'Light'} Mode
      </Text>
    </HStack>
  );
}

export default ThemeSwitch;
