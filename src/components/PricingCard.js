import { Link } from "react-router-dom/dist/umd/react-router-dom.development"
import "./PricingStyle.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <h2>SKILLS & TECHNOLOGIES</h2>
        <div className="card-container">
            <div className="card">
                <h3>STACK</h3>
                <span className="bar"></span>
                <p className="btc">Python</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Java</p>
                <p>C programming</p>
                <p>HTML/CSS</p>
                <p>Bootstrap</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
            <div className="card">
                <h3>FRAMEWORK</h3>
                <span className="bar"></span>
                <p className="btc">Django</p>
                <p>Web Flask</p>
                <p>Node JS</p>
                <p>Express JS</p>
                <p>React JS</p>
                <p>Spring Boot</p>
                <p>Next JS</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
            <div className="card">
                <h3>OTHERS</h3>
                <span className="bar"></span>
                <p className="btc">MongoDB</p>
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>Redis</p>
                <p>SQL Server</p>
                <p>AWS Lambda</p>
                <p>Git & GitHub</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard