import React from 'react'
import { Link } from "react-router-dom"

const RegisterMessage = () => (

    <div className="home">
        <div className="register-message dark-glass margin">
            <h2>
                {/* Register for a free stay at the Exchange Building during ETHMemphis this May. <br/>Sponsored by BookLocal. */}
                Welcome to BookLocal. 
            </h2>
            <h4>If you've received an email about a free stay at EthMemphis, click <Link to="/register">here</Link>.</h4>
            <h4> To learn more about us, click <Link to="/about">here</Link>.</h4>
        </div>
    </div>

)

export default RegisterMessage
