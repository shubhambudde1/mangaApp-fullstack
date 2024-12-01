import React, { useState } from 'react';
import './Navbar.css';  // Import your custom CSS

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/" className="brand-link">Manga Reader</a>
      </div>
      <div className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/latest" className="nav-link">Latest</a>
        <div className="genres-dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>Genres</button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/genre/action" className="dropdown-item">Action</a>
              <a href="/genre/romance" className="dropdown-item">Romance</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
