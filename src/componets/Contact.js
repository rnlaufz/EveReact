import React from 'react';
import Modal from 'react-modal'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {callContactModel} from '../actions/contact'
import {propTypes} from "prop-types"

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 const Contact = ({contact:{callContact}, callContactModel}) => {

    const [formData, setFormData]= useState({
        fName: '',
        lName: '',
        email: ''
    });

    const {fName, lName, email} = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    return (
        <Modal isOpen={callContact} ariaHideApp={!callContact}>
             <div class="modal-container" id="modal">
            <div class="modal">
                <button type="submit" id="close" class="close-btn" onClick={() => callContactModel(false)}><FontAwesomeIcon icon={faTimes} /></button>
                <div class="modal-header">
                    <h1>Cozy Eve</h1>
                    <p>Leave your name and contact and we'll write you soon!</p>
                </div>
                <div class="modal-content">
                    <div class="form-container">
                        <form id="contact-form">
                            <div>
                            <input type="text" placeholder="Your First Name" class="form-control" name="fName" onChange={e => onChange(e)} />
                            </div>
                            <div>
                            <input type="text" placeholder="Your Last Name" class="form-control" name="lName" onChange={e => onChange(e)}/>
                            </div>
                            <div>
                            <input type="email" placeholder="Your Email" class="form-control" name="email" onChange={e => onChange(e)}/>
                            </div>
                            <div>
                            <input type="submit" value="Submit" class="form-control"/>
                            </div>
                        </form>
                    </div>
                    <ul id="media-icons">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                </div>
            </div>
        </div>   
        </Modal>
    )
}



const mapStateToProps = state => ({
    contact: state.contact,
    callContact: state.callContact
})


export default connect(mapStateToProps, {callContactModel})(Contact);