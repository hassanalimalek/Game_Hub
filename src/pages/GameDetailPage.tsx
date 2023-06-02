import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useGame } from '../hooks/useGames';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function GameDetailPage() {
  const params = useParams();
  const [detailVisible, setDetailVisible] = useState(false);
  const { data: game, error } = useGame(params?.id);
  console.log('game -->', game);
  console.log('error -->', error);
  console.log('detailVisible -->', detailVisible);
  if (error) {
    <Text>{error?.message}</Text>;
  }

  return (
    <Box padding={8}>
      <Heading fontSize={'4xl'} marginBottom={4}>
        {game?.name}
      </Heading>
      <Text fontSize={'lg'}>
        {!detailVisible
          ? game?.description_raw.slice(0, 300) + '...'
          : game?.description_raw}
        <Button
          onClick={() => setDetailVisible(!detailVisible)}
          size={'xs'}
          marginLeft={2}
          rounded={'lg'}
          colorScheme='yellow'
        >
          {detailVisible ? 'Show Less' : 'Show More'}
        </Button>
      </Text>
    </Box>
  );
}

export default GameDetailPage;
