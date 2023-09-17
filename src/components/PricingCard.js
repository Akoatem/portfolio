import { Link } from "react-router-dom/dist/umd/react-router-dom.development"
import "./PricingStyle.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <h2>SKILLS & TECHNOLOGIES</h2>
        <div className="card-container">
            <div className="card">
                <h3>BACKEND DEVELOPER</h3>
                <span className="bar"></span>
                <p className="btc">Express JS</p>
                <p>Node JS</p>
                <p>Python</p>
                <p>Flask</p>
                <p>Java</p>
                <p>MongoDB</p>
                <p>PostgreSQL</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
            <div className="card">
                <h3>FRONTEND DEVELOPER</h3>
                <span className="bar"></span>
                <p className="btc">React</p>
                <p>Javascript</p>
                <p>TypeScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
                <p>Next JS</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
            <div className="card">
                <h3>DEVOPS ENGINEER</h3>
                <span className="bar"></span>
                <p className="btc">Application Server</p>
                <p>Shell Navigation</p>
                <p>Docker</p>
                <p>Git & GitHub</p>
                <p>Web Server</p>
                <p>Load Balance/Firewall</p>
                <p>TTPS SSL/SSH</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard