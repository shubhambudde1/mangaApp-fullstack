import React from 'react'
import './Latest.css';

function latest() {
    const allPDFs = [
        { name: 'Top Action Manga', genre: 'action', file: 'manga1.pdf' },
        { name: 'Romantic Favorite', genre: 'romance', file: 'manga3.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Action Manga 2', genre: 'action', file: 'manga2.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
        { name: 'Romance Delight', genre: 'romance', file: 'manga4.pdf' },
      ];
  return (
    <div className="home-container">
      <h1 className="heading">
        Welcome to the <span className="highlight">Manga Reader</span> App!
      </h1>
      
      {/* List of all manga PDFs */}
      <ul className="popular-pdfs">
  {allPDFs.map((pdf, index) => (
    <li key={index} className="pdf-card">
      <img
        src={`/manga/${pdf.genre}/action1.jpg`} // Corrected file path
        // onError={(e) => e.target.src = '/public/manga/action/action.jpg'} // Add a placeholder image if the actual image is not found
        alt={`${pdf.name} cover`}
        className="pdf-image"
      />
      <a
        href={`/manga/${pdf.genre}/${pdf.file}`} // Correct file path with genre subdirectory
        target="_blank"
        rel="noopener noreferrer"
        className="pdf-link"
      >
        {pdf.name}
      </a>
    </li>
  ))}
</ul>


    </div>
  )
}

export default latest