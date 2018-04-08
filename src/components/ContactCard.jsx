import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar  from "images/Portrait_Placeholder.png";

export default class ContactCard extends Component {
    render() {
        return (
            <div className="contact-card">
                <div className='avatar-image-container'>
                    <img
                        src={Avatar}
                        className='avatar-image'
                        alt="Avatar"
                    />
                </div>
                <div className="contact-bio">
                    <h4>Name</h4>
                    <p>Job Title</p>
                    <span>Description</span>
                </div>
            </div>
        )
    }
}
ContactCard.propTypes = {

}
