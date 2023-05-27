import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/Game/GameGrid';
import GenreList from './components/Genre/GenreList';
import { useState } from 'react';
import Filters from './components/Filters';
import GameHeading from './components/Game/GameHeading';
function App() {
  const [gameQuery, setGameQuery] = useState<any>({
    genre: null,
    platform: null,
  });

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
        <Navbar
          onSearchSubmit={(value: string) => {
            setGameQuery({ ...gameQuery, searchValue: value });
          }}
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' padding='20px'>
          <GenreList
            genreSelected={gameQuery.genre}
            onGenreSelect={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>

      <GridItem area='main' padding={10}>
        <GameHeading gameQuery={gameQuery} />
        <Filters gameQuery={gameQuery} setGameQuery={setGameQuery} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
