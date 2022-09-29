import "./FooterStyle.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>25 Simms Street</p>
                        <p>St. John's, NL</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>709-730-3157</h4>
                </div>
                <br/>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>Williamstamp88@gmail.com</h4>
                </div>
               </div>

                <div className="right">
                    <h3>About Me</h3>
                    
                    <p>I am a Software Developer with expertise in design, installation, testing and maintenance of software systems. Proficient in various platforms, languages, and web applications. </p>
                    <br/>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
  
                    <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
        
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
                </div>
                </div>
                </div>
    
  )
}

export default Footer