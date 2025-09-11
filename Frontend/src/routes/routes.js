import React from "react";
import { Routes, Route } from "react-router-dom";
import Read from "../pages/afterAuth/ReadBook/Read";
import BookId from "../pages/afterAuth/BookId/BookId";
import HomePage from "../pages/Homepage/HomePage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Library from "../pages/afterAuth/Library/Library";
import { BookProvider } from '../context/BookContext';


export default function AppRoutes() {
  return (
    <BookProvider>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/kindleLibrary" element={<Library/>}/>
        <Route path="/book/:bookid" element={<BookId/>}/>
        <Route path="/read/:id" element={<Read/>}/>
      </Routes>
    </BookProvider>
  );
}
