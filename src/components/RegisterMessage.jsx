import React, { Component } from 'react'
import Home from 'wrappers/Home'

export default class RegisterMessage extends Component {
    render() {
        return (
            <Home>
                <div className="register-message">
                    <h2>
                        Register for a free stay at the Exchange Building during ETHMemphis this May. <br/>Sponsored by BookLocal.
                        {/* Welcome to the book local booking app. If you've received an email about a free stay at ethmemphis click here, to learn more about us click here. */}
                    </h2>
                </div>
            </Home>
        )
    }
}
