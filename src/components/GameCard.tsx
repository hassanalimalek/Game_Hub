import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { IGames } from '../hooks/useGames';

interface Props {
  game: IGames;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={game?.background_image}></Image>
      <CardBody>
        <Heading size={'md'}>{game?.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
