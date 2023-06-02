import {
  Box,
  Button,
  GridItem,
  HStack,
  Heading,
  Image,
  List,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import {
  useGame,
  useGameScreenshots,
  useGameTrailers,
} from '../hooks/useGames';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import GameAttributeSection from '../components/Game/GameAttributeSection';
import CriticScore from '../components/Game/CriticScore';

function GameDetailPage() {
  const params = useParams();
  const [detailVisible, setDetailVisible] = useState(false);
  const { data: game, error, isLoading } = useGame(params?.id);
  const { data: gameTrailers } = useGameTrailers(params?.id);
  const { data: gameScreenShots } = useGameScreenshots(params?.id);

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
      <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading fontSize={'4xl'} marginBottom={4}>
            {game?.name}
          </Heading>
          <Text fontSize={'lg'}>
            {!detailVisible
              ? game?.description_raw.slice(0, 400) + '...'
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
                      return (
                        <Text key={p?.platform?.id}>{p?.platform?.name}</Text>
                      );
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
                      return <Text key={genre?.name}>{genre?.name}</Text>;
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
                      return (
                        <Text key={publisher?.name}>{publisher?.name}</Text>
                      );
                    })}
                </List>
              }
            />
          </SimpleGrid>
        </GridItem>
        <GridItem>
          {/* Game Trailer */}
          {gameTrailers.count && (
            <video controls src={gameTrailers.results[0]?.data?.max}></video>
          )}
          {/* Game Screenshots */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={6}>
            {gameScreenShots.count &&
              gameScreenShots.results.map((result: any) => {
                return <Image key={result.id} src={result?.image} />;
              })}
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default GameDetailPage;
