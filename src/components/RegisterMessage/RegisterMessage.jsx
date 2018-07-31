import React from 'react'
import { Link } from "react-router-dom"

const RegisterMessage = () => (

    <div className="home">
        <div className="register-message dark-glass margin">
            <h2>
                {/* Register for a free stay at the Exchange Building during ETHMemphis this May. <br/>Sponsored by BookLocal. */}
                Welcome to BookLocal.
            </h2>
            <p>If you've received an email about a free stay at EthMemphis, click <Link to="/register">here</Link>.</p>
            <p> To learn more about us, click <Link to="/about">here</Link>.</p>
        </div>
    </div>

)

export default RegisterMessage
