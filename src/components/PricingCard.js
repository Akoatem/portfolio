import { Link } from "react-router-dom/dist/umd/react-router-dom.development"
import "./PricingStyle.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <h2>SKILLS & TECHNOLOGIES OFFERS</h2>
        <div className="card-container">
            <div className="card">
                <h3>WEB DEVELOPMENT</h3>
                <span className="bar"></span>
                <p className="btc">Django</p>
                <p>React</p>
                <p>Express/Node JS</p>
                <p>Flask</p>
                <p>WordPress</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
            <div className="card">
                <h3>STACK</h3>
                <span className="bar"></span>
                <p className="btc">Python</p>
                <p>Javascript</p>
                <p>TypeScript</p>
                <p>Java</p>
                <p>C Programming</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
            <div className="card">
                <h3>DATABASES</h3>
                <span className="bar"></span>
                <p className="btc">MongoDB</p>
                <p>PostgreSQL</p>
                <p>MySQL Advance</p>
                <p>Redis</p>
                <p>SQLAlchemy/ORM</p>
                <Link to="/contact" className="btn">HIRE ME</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard