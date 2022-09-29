import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import Stack1 from "../assets/stack1.jpg"
import Stack2 from "../assets/stack2.jpg"
import Stack3 from "../assets/stack3.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a Full-Stack Software Developer. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.</p>
           <Link to="/contact">
            <button className="btn">Contact</button>
           </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img src={Stack1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                <img src={Stack3} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent