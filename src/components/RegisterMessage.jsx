import React from 'react'
import { Link } from "react-router-dom"

const RegisterMessage = () => (

    <div className="home">
        <div className="register-message">
            <h2>
                {/* Register for a free stay at the Exchange Building during ETHMemphis this May. <br/>Sponsored by BookLocal. */}
                Welcome to the book local booking app. If you've received an email about a free stay at ethmemphis click <Link to="/register">here</Link>, to learn more about us click <Link to="/about">here</Link>.
            </h2>
        </div>
    </div>

)

export default RegisterMessage
