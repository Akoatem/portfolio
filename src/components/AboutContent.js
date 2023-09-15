
import { Link } from "react-router-dom/dist/umd/react-router-dom.development"
import "./AboutContStyle.css"
import ako2 from "../assets/ako2.jpg"
//import ako1 from "../assets/ako1.jpg"



import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I come from a background as a network engineer,
               and I have realized that even in networking our devices like switches
               and routers are fast evolving into software as a good example is the software defined network (SDN). So, there is a need for me to study software engineering because it will enhance me to the following goals, stay ahead of competition, improve my coding skill, support of teamwork, 
               problem-solving and as well as being an entrepreneur. Having Advanced Diploma(degree) in communication network at Cape Peninsula University of technology. The urge and love for creativity propelled me to integrate in web development and other cutting edge technologies. Thanks to ALX which
               has equipped me with the knowledge and skills in various areas in the tech domains.</p>
            
                <Link to="turquoise-rayna-15.tiiny.site">
                    <button className="btn">View Resume</button>
                </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ako2} className="ako" alt="atem" />
                </div>
               {/* <div className="img-stack bottom">
                    <img src={ako1} className="ako" alt="atem" />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default AboutContent