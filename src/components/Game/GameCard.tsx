import { Card, CardBody, Flex, Heading, Image } from '@chakra-ui/react';
import { IGames } from '../../hooks/useGames';
import PlatformListIcon from '../PlatformListIcon';
import CriticScore from './CriticScore';
import getCroppedImage from '../../services/image-crop';
import { Link } from 'react-router-dom';

interface Props {
  game: IGames;
}

function GameCard({ game }: Props) {
  return (
    <Card
      transition='all .25s ease'
      _hover={{ transform: 'scale(1.03)' }}
      overflow='hidden'
      border={10}
    >
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
        <Link to={`/game/${game?.slug}`}>
          <Heading size={'md'}>{game?.name}</Heading>
        </Link>
      </CardBody>
    </Card>
  );
}

export default GameCard;
