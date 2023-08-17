import React from 'react';
import MovieCard from '../components/MovieCard';

function Home() {

  const movies = [
    { title: 'Movie A', genre: 'Action', releaseYear: 2020 },
    { title: 'Movie B', genre: 'Comedy', releaseYear: 2019 },
    { title: 'Movie C', genre: 'Drama', releaseYear: 2021 },
  ];

  return (
    <div>
      <h1>Welcome to the Movie Theater Website</h1>

      <h2>Featured Movies</h2>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          genre={movie.genre}
          releaseYear={movie.releaseYear}
        />
      ))}
    </div>
  );
}

export default Home;