import React, { useState } from 'react';
import '../styles.css';
import jp from '../images/jp.jpg';
import sc from '../images/scarface.jpg';
import pf from '../images/pulpfiction.jpg';
import Lightbox from 'react-image-lightbox'; 
import 'react-image-lightbox/style.css'; 

function MovieGallery() {
  const moviePosters = [jp, sc, pf];
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="container">
      <h1>Movie Poster Gallery</h1>
      <div className="gallery">
        {moviePosters.map((poster, index) => (
          <div className="gallery-item" key={index} onClick={() => openLightbox(index)}>
            <img src={poster} alt={`Movie Poster ${index}`} />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={moviePosters[lightboxIndex]}
          nextSrc={moviePosters[(lightboxIndex + 1) % moviePosters.length]}
          prevSrc={moviePosters[(lightboxIndex + moviePosters.length - 1) % moviePosters.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + moviePosters.length - 1) % moviePosters.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % moviePosters.length)}
        />
      )}
    </div>
  );
}

export default MovieGallery;