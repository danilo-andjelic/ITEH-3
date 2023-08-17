import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../styles.css'; 

function Home() {

  const movies = [
    { title: 'Avatar', genre: 'Action', releaseYear: 2020 },
    { title: 'Barbie', genre: 'Comedy', releaseYear: 2019 },
    { title: 'Before sunrise', genre: 'Drama', releaseYear: 2021 },
  ];

  const [filterValue, setFilterValue] = useState('');
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Welcome to the Movie Theater Website</h1>
      <h2>Featured Movies</h2>

      <input
        type="text"
        placeholder="Filter by title"
        value={filterValue}
        onChange={e => setFilterValue(e.target.value)}
      />

      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            genre={movie.genre}
            releaseYear={movie.releaseYear}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
