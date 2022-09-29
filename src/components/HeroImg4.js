import "./HeroImg4Style.css"

import React, { Component } from 'react'

class HeroImg4 extends Component {
    render () {
  return (
    <div className="hero-img4">
        <div className="heading4">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}

export default HeroImg4