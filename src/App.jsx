import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Genre from './components/Genre';
import Contact from './components/Contact';
import Latest from './components/Latest';
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:genreName" element={<Genre />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
