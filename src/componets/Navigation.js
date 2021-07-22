import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {callContactModel} from '../actions/contact';

 const Navigation = ({callContactModel}) => {

    return (
        <div class="nav-container">
        <nav>
            <ul class="list-group">
                <div id="group-one">
                    <li id="toggle" class="list-group-item"><button><FontAwesomeIcon icon={faSnowflake}/></button></li>
                    <li class="list-group-item"><Link to="/">Home</Link></li>
                    <li class="list-group-item"><Link to="/eve_about">About</Link></li>
                    <li class="list-group-item"><Link to="/eve_book">Book</Link></li>
                    <li class="list-group-item"><Link onClick={() => callContactModel(true)}>Contact</Link></li>
                </div>
                <div id="group-two">
                    <li><Link><FontAwesomeIcon icon={faFacebook}/></Link></li>
                    <li><Link><FontAwesomeIcon icon={faInstagram}/></Link></li>
                    <li><Link><FontAwesomeIcon icon={faTwitter}/></Link></li>
                </div>
            </ul>
        </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    callContact: state.callContact
})


export default connect(mapStateToProps, {callContactModel})(Navigation)