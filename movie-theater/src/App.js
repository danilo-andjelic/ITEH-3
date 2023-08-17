import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact'
import MovieTrivia from './pages/MovieTrivia';
import MovieGallery from './pages/Gallery';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie-trivia" element={<MovieTrivia />} /> 
          <Route path="/movie-gallery" element={<MovieGallery />} />
        </Routes>
    </Router>
  );
}

export default App;
