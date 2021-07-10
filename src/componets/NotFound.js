import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
        <h3 className="hyper-text">404</h3>
        <p className="upper">Oops! Page not found</p>
        <p className="not-found-info">The page you're looking for might not exist, has beeen removed or currently unavaliable.</p>
        <Link to="/" className="btn">Go to homepage</Link>
    </div>
    )
}

export default NotFound;