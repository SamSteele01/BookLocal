import React from 'react'
import ContactCard from "components/ContactCard";
import Aaron from "images/AaronAnderson.jpg";
import Sam from "images/SamSteele.jpg";
import Sardor from "images/SardorU.jpg";
import Steve from "images/StevenLee.jpg";

const Contact = () => (
 
    <div className="app">
        <div className="contact-page">
            {/* <h1>Contact Page!</h1> */}
            <ContactCard avatar={Sardor} className="sardor-avatar" name="Sardor Umarov" jobTitle="Co-founder, Hotel Expert" email="sardor@booklocal.in" linkedIn="https://www.linkedin.com/in/umarov/"/>
            <ContactCard avatar={Steve} className="" name="Steven Lee" jobTitle="Co-founder, Smart Contract Engineer" email="steven@booklocal.in" linkedIn="https://www.linkedin.com/in/steven-lee-99274b100/"/>
            <ContactCard avatar={Sam} className="sam-avatar" name="Sam Steele" jobTitle="Front-end Engineer" email="ssteele017@gmail.com" linkedIn="https://www.linkedin.com/in/samuel-steele/"/>
            <ContactCard avatar={Aaron} className="aaron-avatar" name="Aaron Anderson" jobTitle="Front-end Engineer" email="aaron@web3devs.com" linkedIn="https://www.linkedin.com/in/aaronlynanderson/"/>
        </div>
    </div>

)
export default Contact