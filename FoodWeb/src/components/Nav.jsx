import { NavLink } from "react-router-dom"
import logo from "../assets/logo/logo.png"
import { IoBagOutline } from "react-icons/io5";
import "../styles/NavStyle.css"
import { useEffect, useState } from "react";


const Nav = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px scroll hone ke baad bg white
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
   <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-opt">
            <NavLink  className="navlink" to="/" >Home</NavLink>
            <NavLink className="navlink" to="/about" >About</NavLink>
            <NavLink className="navlink" to="/menu" >Our menu</NavLink>
            <NavLink  className="navlink"to="/shop" >Shop</NavLink>
            <NavLink className="navlink" to="/blog" >Blog</NavLink>
            <NavLink className="navlink" to="/contact" >Contact</NavLink>
            <IoBagOutline className="cart-logo" />
        </div>
    </div>
  )
}

export default Nav