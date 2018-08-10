import React from 'react'
import { Link } from "react-router-dom"
import IronImage from "components/IronImage"
import SmallBackground from "images/booklocal-bg-sm.jpg"
import BackgroundImage from "images/booklocal-bg.jpg"

const RegisterMessage = () => (

    <div
    className="home"
    >
        <IronImage srcPreload={SmallBackground} srcLoaded={BackgroundImage} />
        <div className="register-message dark-glass margin">
            <h2>
                Welcome to BookLocal.
            </h2>
            <h2>
                The hotel booking app powered by Ethereum.
            </h2>
        </div>
    </div>

)

export default RegisterMessage
