import React from 'react';
import Modal from 'react-modal'
import {connect} from 'react-redux';
import {callContactModel} from '../actions/contact'
import {propTypes} from "prop-types"

 const Contact = ({callContact:{callContact}}) => {
     console.log(callContact)
    return (
        <Modal isOpen={callContact} ariaHideApp={false}>
             <div class="modal-container" id="modal">
            <div class="modal">
                <button id="close" class="close-btn">X</button>
                <div class="modal-header">
                    <h1>Cozy Eve</h1>
                    <p>Leave your name and contact and we'll write you soon!</p>
                </div>
                <div class="modal-content">
                    <div class="form-container">
                        <form id="contact-form">
                            <div>
                            <input type="text" placeholder="Your First Name" class="form-control" />
                            </div>
                            <div>
                            <input type="text" placeholder="Your Last Name" class="form-control"/>
                            </div>
                            <div>
                            <input type="email" placeholder="Your Email" class="form-control"/>
                            </div>
                            <div>
                            <input type="submit" value="Submit" class="form-control"/>
                            </div>
                        </form>
                    </div>
                    <ul id="media-icons">
                        {/* <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li> */}
                    </ul>
                </div>
            </div>
        </div>   
        </Modal>
    )
}



const mapStateToProps = state => ({
    callContact: state.contact
})


export default connect(mapStateToProps, {callContactModel})(Contact);