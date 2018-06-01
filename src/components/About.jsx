import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>What</h1>
        <h3>The vision for BookLocal is to connect travelers directly to their hotel of choice by creating the first two-way property management system accessible as both a traveler and hotel administrator. Click to download our <a href="https://github.com/BookLocal/prospectus/raw/master/BookLocal_prospectus.pdf" download="BookLocal-Prospectus">whitepaper</a>.</h3>
        
        <h1>Proof of Concept</h1>
        <h3>Toward implementation, this proof of concept version uses <a href="https://github.com/ethereum/eips/issues/721">ERC721</a> to define non-fungible tokens and <a href="https://github.com/ethereum/EIPs/issues/809">ERC809</a> to interface with renting functions.</h3>
      </div>
    )
  }
}

export default About
