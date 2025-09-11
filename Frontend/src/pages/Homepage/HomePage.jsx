import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../../App.css'
import './Homepage.css'
import Library from '../../images/Library.png'

export default function HomePage() {

   const navigate=useNavigate();
    return (
      <div className="layout-container">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo-wrapper">
            <img src={Library} alt='Library'width={32} height={32}/>
              <span className="logo-text">Logic Book Library</span>
            </div>
          
          </div>
        </nav>
  
        <div className="content-wrapper">
          <div className="content-container">
            <div className="content-left">
              <h1 className="main-heading">
                Discover Your Favorite<span className="highlight-indigo"> Logic Book</span>
              </h1>
              <p className="paragraph">
                Access Logic books with a single click. Join our community of readers today.
              </p>
              <div className="button-group">
                <button 
                  onClick={() => navigate('./Signup')}
                 className='action-button'
                >
                  Sign Up
                </button>
                <button 
                  onClick={() => navigate('./Login')}
                 className='action-button'
                >
                  Sign In
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
}


