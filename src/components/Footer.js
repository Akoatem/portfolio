import "./FooterStyle.css"
import React from 'react'
import { FaFacebook, FaGithub, 
        FaHome, FaLinkedin,
        FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                <div>
                    <p>204 Wale Street, Cape Town</p>
                    <p>South Africa, 8001.</p>
                </div>
            </div>
            <div className="phone">
             <h4>
                <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                +27844848030 | whatsApp: +27844848030
             </h4>
            </div>
            <div className="email">
             <h4>
                <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                akoatemsam2003@gmail.com
             </h4>
            </div>
          </div>
          <div className="right">
            <h4>About Me</h4>
            <p>I come from a background as a network engineer, 
                and I have realized that even in networking our devices like switches and routers are fast evolving into software
                 as a good example is the software defined network (SDN)</p>
                 <div className="social">
                   <a href="https://www.facebook.com/akon.dino" target="_blank" 
                    rel="noopener noreferrer">
                   <FaFacebook size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                 </a>
                 <a href="https://www.linkedin.com/in/ako-atem-sampson-a711891ab/" target="_blank" 
                    rel="noopener noreferrer">
                   <FaLinkedin size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                 </a>
                 <a href="https://github.com/Akoatem" target="_blank" 
                    rel="noopener noreferrer">
                   <FaGithub size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                 </a>
                 <a href="https://www.facebook.com/your-profile" target="_blank" 
                    rel="noopener noreferrer">
                   <FaTwitter size={30} style={{color: "#fff", marginRight:"1rem"}}/>
                 </a>
             </div>
          </div>
        </div>
    </div>

  )
}

export default Footer