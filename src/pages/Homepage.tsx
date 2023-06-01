import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/Game/GameGrid';
import GenreList from '../components/Genre/GenreList';
import Filters from '../components/Filters';
import GameHeading from '../components/Game/GameHeading';
function Homepage() {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above='lg'>
        <GridItem area='aside' padding='20px'>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area='main' padding={10}>
        <GameHeading />
        <Filters />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default Homepage;
