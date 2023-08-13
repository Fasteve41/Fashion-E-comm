import React, { useContext } from 'react'
import './pages.css'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CommContext } from './CommContext'
import { Link } from 'react-router-dom'

function Header() {
  const {count} = useContext(CommContext)
  
  return (
    <div  className='header'>
      <img src="./img/logo.png" alt=""  data-aos= 'fade-down' />
      <div className="nav" data-aos= 'fade-down' >
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="carticon"  data-aos= 'fade-down' >
        <Link to="/cart"><AiOutlineShoppingCart className='header-cart' /></Link>
        <h5>{count}</h5>
      </div>
     
    </div>
  )
}

export default Header