import { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [Mybooks, setMybooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5000/api/Logicbooks',{
            method:'GET',
            credentials:'include',
        });
     console.log(response)
        const data = await response.json();
          
        setMybooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books: Mybooks, loading }}>
      {children}
    </BookContext.Provider>
  );
};