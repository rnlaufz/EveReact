import React from 'react';
import {Link} from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const Navigation = () => {
    return (
        <div class="nav-container">
        <nav>
            <ul class="list-group">
                <div id="group-one">
                    <li id="toggle" class="list-group-item"><button><FontAwesomeIcon icon={faSnowflake}/></button></li>
                    <li class="list-group-item"><Link to="/">Home</Link></li>
                    <li class="list-group-item"><Link to="/eve_about">About</Link></li>
                    <li class="list-group-item"><Link to="/eve_book">Book</Link></li>
                </div>
                <div id="group-two">
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
                </div>
            </ul>
        </nav>
        </div>
    )
}


export default Navigation