import React from 'react';

function MovieCard({ title, genre, releaseYear }) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Release Year: {releaseYear}</p>
    </div>
  );
}

export default MovieCard;