import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return(
	  <section>
		  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>FoodiesHub</h4>
  	 		</div>
  	 		
  	 		<div className="footer-col">
						  <h4>Links:</h4>
						  <div className="social-links">
  	 			<ul>
  	 	<NavLink exact activeClassName="active" to='/'><li>Home</li></NavLink>
        <NavLink activeClassName="active" to='/recipe' ><li>Recipe</li></NavLink>
        <NavLink activeClassName="active" to='/favorite'><li>Favorites</li></NavLink>
        <NavLink activeClassName="active" to='/creation'><li>My recipe</li></NavLink>
							  </ul>
							  </div>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us:</h4>
  	 			<div className="social-links">
							  <ul>
								  <li><BsFacebook className='icons'/></li>
								  <li><BsWhatsapp className='icons'/></li>
								  <li><FiTwitter className='icons'/></li>
								  <li><AiOutlineYoutube className='icons'/></li>
					</ul>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  </section>
  )
}
export default Footer;

