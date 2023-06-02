import { Box, Text } from '@chakra-ui/react';

function GameAttributeSection({
  title,
  detailComponent,
}: {
  title: string;
  detailComponent: any;
}) {
  return (
    <Box paddingY={6}>
      <Text fontWeight={'bold'} fontSize={'xl'} as={'h3'} color={'gray.600'}>
        {title && title}
      </Text>
      {detailComponent}
    </Box>
  );
}

export default GameAttributeSection;
