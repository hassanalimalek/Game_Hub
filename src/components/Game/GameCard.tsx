import { Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react';
import { IGames } from '../../hooks/useGames';
import PlatformListIcon from '../PlatformListIcon';
import CriticScore from './CriticScore';
import getCroppedImage from '../../services/image-crop';

interface Props {
  game: IGames;
}

function GameCard({ game }: Props) {
  return (
    <Card overflow={'hidden'} rounded={'md'}>
      <Image src={getCroppedImage(game?.background_image) as string}></Image>
      <CardBody>
        <Flex
          flexWrap={'wrap'}
          gap={'4'}
          justifyContent={'space-between'}
          marginBottom={2}
        >
          <PlatformListIcon
            platforms={game?.parent_platforms.map((p) => p?.platform)}
          />
          <CriticScore criticScore={game?.metacritic} />
        </Flex>
        <Heading size={'md'}>{game?.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
