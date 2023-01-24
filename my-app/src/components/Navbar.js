import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

function Navbar() {
   const [Mobile, setMobile] = useState(false)
  return (
    <nav className="navbar">
      <h3 className="logo">F<span>oo</span>diesHub</h3>
       {/*
        Making the page responsive on both media screens
        */}
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to='/'><li>Home</li></Link>
        <Link to='/recipe'><li>Recipe</li></Link>
        <Link to='/favorite'><li>Favorites</li></Link>
        <Link to='/creation'><li>My recipe</li></Link>
      </ul>
       {/* 
        whenever we click on button = setMobile(!Mobile)  
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
   </nav>
  )
}
export default Navbar;