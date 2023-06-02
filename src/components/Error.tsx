import { Box, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from './Navbar';

function Error() {
  const error = useRouteError();
  return (
    <Box>
      <Navbar />
      <Box padding={6} textAlign={'center'}>
        <Text fontSize={'3xl'}>
          {isRouteErrorResponse(error)
            ? 'Invalid Route '
            : 'Something went wrong'}
        </Text>
      </Box>
    </Box>
  );
}

export default Error;
