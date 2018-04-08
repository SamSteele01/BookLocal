import React, { Component } from 'react'
import ContactCard from "components/ContactCard";

export default class Contact extends Component {
  render() {
    return (
        <div className="app">
            <div className="contact-page">
                {/* <h1>Contact Page!</h1> */}
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </div>
        </div>
    )
  }
}