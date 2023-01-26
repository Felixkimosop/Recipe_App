import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { GiKnifeFork} from "react-icons/gi";

function Navbar() {
   const [Mobile, setMobile] = useState(false)
  return (
   
    <nav className="navbar">
      
      <h3 className="logo"><GiKnifeFork className="logo-img"/>F<span>oo</span>diesHub</h3>
       {/*
        Making the page responsive on both media screens
        */}
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <NavLink exact activeClassName="active" to='/'><li>Home</li></NavLink>
        <NavLink activeClassName="active" to='/recipe' ><li>Recipe</li></NavLink>
        <NavLink activeClassName="active" to='/favorite'><li>Favorites</li></NavLink>
        <NavLink activeClassName="active" to='/creation'><li>My recipe</li></NavLink>
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