import { Badge } from '@chakra-ui/react';

interface Props {
  criticScore: number;
}

function CriticScore({ criticScore }: Props) {
  const color =
    criticScore > 80 ? 'green' : criticScore < 40 ? 'red' : 'yellow';
  return (
    <div>
      <Badge colorScheme={color}>{criticScore}</Badge>
    </div>
  );
}

export default CriticScore;
