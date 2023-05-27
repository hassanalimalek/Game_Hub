import React from 'react';
import useGenres from '../../hooks/useGenres';

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  console.log('genres -->', genres);
  return <div>GenreList</div>;
}

export default GenreList;
