import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom"


import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="" />
                <h2 className="project-title">{props.title}</h2>
                <div className="project-details">
                    <p className="proDescription">{props.text}</p>
                    <div className="pro-btns">
                  <NavLink to={props.view} className="btn">View</NavLink>
                  <NavLink to="url.com" className="btn">Code</NavLink>
                    </div>
                </div>

            </div>
  )
}

export default WorkCard