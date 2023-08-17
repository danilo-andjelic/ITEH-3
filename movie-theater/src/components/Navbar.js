import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <h1>Movie Theater</h1>
          <div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/movie-trivia" className="nav-link">Trivia</Link>
            <Link to="/movie-gallery" className="nav-link">Gallery</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;