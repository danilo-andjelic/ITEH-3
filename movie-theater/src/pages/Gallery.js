import React from 'react';
import '../styles.css';
import jp from '../images/jp.jpg'
import sc from '../images/scarface.jpg'
import pf from '../images/pulpfiction.jpg'

function MovieGallery() {
  const moviePosters = [jp, sc, pf];

  return (
    <div className="container">
      <h1>Movie Poster Gallery</h1>
      <div className="gallery">
        {moviePosters.map((poster, index) => (
          <div className="gallery-item" key={index}>
            <img src={poster} alt={`Movie Poster ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGallery;