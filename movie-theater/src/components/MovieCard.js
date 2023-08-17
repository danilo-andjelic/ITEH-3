import React from 'react';
import '../styles.css'; 

function MovieCard({ title, genre, releaseYear }) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p className="movie-info">Genre: {genre}</p>
      <p className="movie-info">Release Year: {releaseYear}</p>
    </div>
  );
}

export default MovieCard;