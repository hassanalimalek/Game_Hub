import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/Game/GameGrid';
import GenreList from './components/Genre/GenreList';
import { useState } from 'react';
import { IGenres } from './hooks/useGenres';
import Sorting from './components/sorting';
function App() {
  // const [selectedGenre, setSelectedGenre] = useState<IGenres | null>(null);
  const [gameQuery, setGameQuery] = useState<any>({
    genre: null,
    platform: null,
  });
  console.log('gameQuery -->', gameQuery);
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
          <GenreList
            genreSelected={gameQuery.genre}
            onGenreSelect={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <Sorting gameQuery={gameQuery} setGameQuery={setGameQuery} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
