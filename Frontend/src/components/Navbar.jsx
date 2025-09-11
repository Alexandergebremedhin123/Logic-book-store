import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Library  from '../images/Library.png'
import { IoSearchOutline } from 'react-icons/io5'
import { LuSettings2, LuShoppingCart } from 'react-icons/lu'
import { TbArrowsSort } from 'react-icons/tb'
import { BsFillGrid3X3GapFill, BsThreeDotsVertical } from 'react-icons/bs'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-group">
        <img src={Library} alt='Library'width={32} height={32}/>
              <span className="logo-text">Logic Book Library</span>
        </div>
      
        
        <div className="nav-group">
          <Link to="/" className="primary-button">
            Sign Out
          </Link>
        </div>
      </div>
    </header>
  )
}