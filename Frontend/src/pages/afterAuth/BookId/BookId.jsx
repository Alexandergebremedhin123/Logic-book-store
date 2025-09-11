import React,{useState,useEffect} from 'react'
import Navbar from '../../../components/Navbar'
import './bookid.css'
import { useParams,useNavigate } from "react-router-dom";


const apiUrl=process.env.REACT_APP_API_URL

export default function BookId() {
    const navigate=useNavigate();
    const {id}=useParams();
    const [book,setBook]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    
  useEffect(()=>{
    const fetchBook=async()=>{
        try{
          const response=await fetch(apiUrl+`/api/books/${id}`)
       if(!response.ok){
         throw new Error('Failed to fetch book data');
       }
       const data=await response.json();
       setBook(data);
       setLoading(false);
        }
        catch(err){
          setError(err.message);
          setLoading(false);
        }
      }
      fetchBook();
  },[id])
  if(loading){
    return <p>Loading/...</p>
  }
  if(error){
    return <p>{error}</p>
  }
  return (
    <div className="main">
        <Navbar/>
        <div className="container">
            <div className="imageContainer">
                <img src={book.image} alt={book.title} className="bookImage"/>
            </div>
            <div className="details">
              <h1 className="bookTitle">{book.title}</h1>
              <p className="bookAuthor">by {book.author}</p>
              <div className="bookDescription" dangerouslySetInnerHTML={{__html:book.description}}/>
              <p className="bookPrice">{book.price}</p>
              <button className="purchaseButton" onClick={
                ()=>{
                  navigate(`/read/${id}`)
                }
              }>Start Reading</button>
            </div>
        </div>
     
    </div>
  )
}
