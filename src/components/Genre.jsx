import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Genre.css'; // Import the custom CSS

const Genre = () => {
  const { genreName } = useParams();
  
  // Define the PDF files for each genre
  const pdfs = {
    action: ['manga1.pdf', 'manga2.pdf', 'manga5.pdf', 'manga6.pdf'],
    romance: ['manga3.pdf', 'manga4.pdf', 'manga7.pdf', 'manga8.pdf'],
  };
  
  // State for tracking the current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;  // Number of items per page
  
  // Calculate total pages based on the number of PDFs available for the selected genre
  const totalPages = Math.ceil((pdfs[genreName]?.length || 0) / itemsPerPage);
  
  // Slice the PDFs for the current page
  const paginatedPDFs = pdfs[genreName]?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  // Handle page change to the next page
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  
  // Handle page change to the previous page
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  return (
    <div className="genre-container">
      <h2 className="genre-header">Genre: {genreName}</h2>
      
      {/* List PDFs for the current page */}
      <ul className="pdf-list">
        {paginatedPDFs?.map((pdf, index) => (
          
          <li key={index} className="pdf-card">
            <img
              src={`/manga/${genreName}/action.jpg`} // Corrected file path with genre subdirectory
              alt={pdf}
            />
            <a
              href={`/manga/${genreName}/${pdf}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              {pdf}
            </a>
          </li>
        )) || (
          <p className="no-pdfs">No PDFs found for this genre.</p>
        )}
      </ul>
      
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        >
          Previous
        </button>
        
        {/* Display the current page and total pages */}
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Genre;
