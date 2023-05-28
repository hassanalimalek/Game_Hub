import useGenres, { IGenres } from '../../hooks/useGenres';
import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';

interface Props {
  genreSelected: IGenres | null;
  onGenreSelect: (genre: IGenres) => void;
}
function GenreList({ genreSelected, onGenreSelect }: Props) {
  const { data: genres, error, isLoading } = useGenres();

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
                  src={genre?.image_background}
                ></Image>
                <Text
                  cursor={'pointer'}
                  onClick={() => {
                    onGenreSelect(genre);
                  }}
                  fontWeight={
                    genreSelected?.id === genre?.id ? 'bold' : 'normal'
                  }
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
