import "./HeroImageStyle.css"
import React from 'react'
import introImg from "../assets/pic01.jpg"
import { Link } from "react-router-dom/dist/umd/react-router-dom.development"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={introImg} alt="introImg"></img>
        </div>
        <div className="content">
            <p>Writing a program is something I’m very passionate and I strongly believe in team work and  collaboration.
                 I am willing to learn more so that  I can be better as time goes.</p>
            <h1>I'm A Web Developer</h1>
            <div className="her-btns">
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="https://turquoise-rayna-15.tiiny.site" className="btn btn-light">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage