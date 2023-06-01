import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/Game/GameGrid';
import GenreList from './components/Genre/GenreList';
import Filters from './components/Filters';
import GameHeading from './components/Game/GameHeading';
import useGameQueryStore from './state-management/store/store';
function App() {
  const { gameQuery } = useGameQueryStore();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' padding='20px'>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area='main' padding={10}>
        <GameHeading gameQuery={gameQuery} />
        <Filters />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
