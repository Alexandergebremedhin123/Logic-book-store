import React,{useState,useEffect} from 'react';
import {Worker,Viewer} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import Navbar from '../../../components/Navbar';
import './read.css'
import { useParams } from 'react-router-dom';
import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Read(){
    const {id}=useParams();
    const [pdfUrl,setPdfUrl]=useState([]);
    const defaultLayoutPluginInstance=defaultLayoutPlugin();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
  const fetchBook = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/Logicbooks/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch book data');
      }
      
      const data = await response.json();
      
      if (data.filePath) {
        const cleanFilePath = data.filePath.startsWith('/') 
          ? data.filePath.slice(1) 
          : data.filePath;
        
        const url = `http://localhost:5000/${cleanFilePath}`;
        console.log('PDF URL:', url); // Debug the URL
        setPdfUrl(url);
      } else {
        throw new Error('PDF file path not found');
      }
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  
  fetchBook();
}, [id]);
      if(loading){
        return <p>Loading/...</p>
      }
      if(error){
        return <p>{error}</p>
      }
    return(
        <div className="main">
            <Navbar/>
            <div className="container">
                <div className="viewer">
                {pdfUrl?(
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                        fileUrl={pdfUrl}
                        plugins={[defaultLayoutPluginInstance]}
                        theme="dark"
                        />
                        </Worker>
                ):(
                    <p>Loading PDF...</p>
                )}
                   
                    
                </div>
                   
            </div>
        </div>
    )    
}
