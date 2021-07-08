import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../componets/Footer'
import Navigation from '../componets/Navigation'

const Showcase = () => {
    return (
       <div className="container">
           <Navigation/>
           <div className="content-container">
        <div className="content">
            <h1>Cozy Eve</h1>
            <h2>The Winter
                <br/>
                Resort 
                <br/>
                Of your dreams    
            </h2>  
           <Link to="/eve_book" className="btn">Book Now!</Link>
      <Footer/>
        </div>
        </div>
    </div>

    )
}

export default Showcase