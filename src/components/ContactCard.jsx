import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Avatar  from "images/Portrait_Placeholder.png";

 const ContactCard = ( props ) => (

    <div className="contact-card">
        <div className='avatar-image-container'>
            <img
                src={props.avatar}
                className={`avatar-image ${props.className}`}
                alt="Avatar"
            />
        </div>
        <div className="contact-bio">
            <h3>{props.name}</h3>
            <p>{props.jobTitle}</p>
            <p>{props.email}</p>
            <span><a href={props.linkedIn} >LinkedIn</a></span>
        </div>
    </div>

 )
ContactCard.propTypes = {
    avatar: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    jobTitle: PropTypes.string,
    email: PropTypes.string,
    linkedIn: PropTypes.string,
}
export default ContactCard