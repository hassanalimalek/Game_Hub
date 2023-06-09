import useGenres from '../../hooks/useGenres';
import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGameQueryStore from '../../state-management/store/store';
import getCroppedImage from '../../services/image-crop';

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { setGenreId } = useGameQueryStore();

  return (
    <List>
      <Heading as='h4'>Genres</Heading>
      {error && null}
      {isLoading && (
        <HStack
          height={'100vh'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Spinner />
        </HStack>
      )}

      {genres &&
        genres?.results?.map((genre: any) => {
          return (
            <ListItem key={genre?.id} paddingY={2}>
              <HStack gap={1}>
                <Image
                  objectFit={'cover'}
                  rounded={'lg'}
                  boxSize={'40px'}
                  src={getCroppedImage(genre?.image_background) as string}
                ></Image>
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    setGenreId && setGenreId(genre?.id);
                  }}
                  fontWeight={selectedGenreId === genre?.id ? 'bold' : 'normal'}
                >
                  {genre.name}
                </Text>
              </HStack>
            </ListItem>
          );
        })}
    </List>
  );
}

export default GenreList;
