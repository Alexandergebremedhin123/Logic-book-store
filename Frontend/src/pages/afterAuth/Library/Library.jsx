import React, { useContext } from 'react'
import { BookContext } from '../../../context/BookContext';
import Navbar from '../../../components/Navbar'
import BookCard from '../../../components/BookCard'
import './Library.css'


export default function Library() {
  const {books,loading}=useContext(BookContext);
  
  if (loading) 
  return( 
  <div className="loading-container">
    <div className="loading-spinner">
      <div className="loading-circle"></div>
      <div className="loading-bar"></div>
    </div>
  </div>

  );
  return (
    
    <div className="main-layout"> 
      <Navbar />
      <main className="main-container">
        <section className="section">
          <h2 className="section-title">Featured Books</h2>
          <div className="grid-layout">
            {books.slice(0, 4).map(book => (
              <BookCard key={book.id} book={book} featured />
            ))}
          </div>
        </section>

        <section>
          <div className="filter-bar">
            <h2 className="section-title">Browse Collection</h2>
            <div className="relative">
              <select className="filter-select">
                <option>Sort by</option>
                <option>Newest</option>
                <option>Popular</option>
                <option>A-Z</option>
              </select>
              <div className="select-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="grid-layout">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <p>© 2025 Logic book Library. All rights reserved.</p>
        </div>
      </footer>
   

    </div>
  )
}