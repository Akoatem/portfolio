import { Link } from "react-router-dom/dist/umd/react-router-dom.development"
import "./NavbarStyle.css" 
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {
    // function for hamburger

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scrow", changeColor)


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>AKOATEM</h1>
        </Link>
        <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/projects">Projects</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />) :
             (<FaBars size={20} style={{color: "#fff"}} />)}   
       </div>

    </div>
  )
}

export default Navbar