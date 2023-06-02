import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Heading,
  List,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useGame } from '../hooks/useGames';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import GameAttributeSection from '../components/Game/GameAttributeSection';
import CriticScore from '../components/Game/CriticScore';

function GameDetailPage() {
  const params = useParams();
  const [detailVisible, setDetailVisible] = useState(false);
  const { data: game, error, isLoading } = useGame(params?.id);
  console.log('game -->', game);

  console.log('error -->', error);
  console.log('detailVisible -->', detailVisible);
  if (error) {
    <Text>{error?.message}</Text>;
  }
  if (isLoading) {
    return (
      <HStack justifyContent={'center'} height={'50vh'}>
        <Spinner size={'xl'} />
      </HStack>
    );
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
          size={'sm'}
          marginLeft={2}
          rounded={'lg'}
          colorScheme='yellow'
        >
          {detailVisible ? 'Show Less' : 'Show More'}
        </Button>
      </Text>

      {/* Game Attributes */}
      <SimpleGrid columns={2}>
        <GameAttributeSection
          title='Platforms'
          detailComponent={
            <List>
              {game.parent_platforms &&
                game?.parent_platforms?.map((p: any) => {
                  return <Text>{p?.platform?.name}</Text>;
                })}
            </List>
          }
        />
        <GameAttributeSection
          title='Critic Score'
          detailComponent={<CriticScore criticScore={game?.metacritic} />}
        />
        <GameAttributeSection
          title='Genres'
          detailComponent={
            <List>
              {game.genres &&
                game?.genres?.map((genre: any) => {
                  return <Text>{genre?.name}</Text>;
                })}
            </List>
          }
        />
        <GameAttributeSection
          title='Publishers'
          detailComponent={
            <List>
              {game.publishers &&
                game?.publishers?.map((publisher: any) => {
                  return <Text>{publisher?.name}</Text>;
                })}
            </List>
          }
        />
      </SimpleGrid>
    </Box>
  );
}

export default GameDetailPage;
