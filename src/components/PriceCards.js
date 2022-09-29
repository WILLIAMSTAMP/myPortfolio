import "./PriceCardsStyle.css";
import React from 'react'
import { Link } from "react-router-dom"

const priceCards = () => {
  return (
    <div className="pricing">
        <h1 className="pricing-section-header">Pricing</h1>
        <div className="card-container">

            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                    <p className="cad">$100</p>
                    <p>- 2 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Responsive Design -</p>
                    <br/>
                    <br/>
                <Link to="/Contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                    <p className="cad">$300</p>
                    <p>- 2 Days -</p>
                    <p>- 5 Pages -</p>
                    <p>- Responsive Design -</p>
                    <br/>
                    <br/>
                    
                <Link to="/Contact" className="btn">PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Ultimate -</h3>
                <span className="bar"></span>
                    <p className="cad">$500</p>
                    <p>- 5 Days -</p>
                    <p>- 8 Pages -</p>
                    <p>- Responsive Design -</p>
                    <p>- Special Features -</p>
                <Link to="/Contact" className="btn">PURCHASE NOW</Link>
            </div>
            </div>
        </div>
   
  )
}

export default priceCards