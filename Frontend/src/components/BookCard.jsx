import React from 'react'
import './BookCard.css'
import { useNavigate } from 'react-router-dom';
export default function BookCard({ book, featured = false }) {
  const navigate=useNavigate()
   const handleClick = () => {
    navigate(`/read/${book.id}`); 
  };
    return (
          <div className='book-card featured'> 
          <div className="book-image-container">
            <img 
              src={book.coverImage} 
              alt={book.title}
              className="book-image"
            />
          </div>
          <div className="book-content">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-meta">by {book.author}</p>
            <p className="book-description">{book.description}</p>
            <div className="book-footer">
              <button className="book-button" onClick={handleClick}>
                Read Now
              </button>
              {featured && (
                <span className="book-badge">
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
      );
}
