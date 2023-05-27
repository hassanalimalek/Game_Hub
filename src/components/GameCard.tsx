import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { IGames } from '../hooks/useGames';
import PlatformListIcon from './PlatformListIcon';

interface Props {
  game: IGames;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={game?.background_image}></Image>
      <CardBody>
        <Heading size={'md'}>{game?.name}</Heading>
        <PlatformListIcon
          platforms={game?.parent_platforms.map((p) => p?.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
