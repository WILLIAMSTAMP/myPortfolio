import "./HeroImgStyle.css";
import IntroImg from "../assets/hero3.jpg";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="heroimg"/>
        </div>
        <div className="content">
            <p>William Stamp</p>
            <br/>
            <br/>
            <h1>Full-Stack Software Developer</h1>
            <div>
              <br/>
              <br/>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg