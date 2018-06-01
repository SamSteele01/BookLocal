import React, { Component } from 'react';
import 'styles/App.css';
import 'grommet/grommet.min.css'; //vanilla styles
// import Hero from 'components/Hero';
import What from './what/What';
import Why from './why/Why';
import Who from './who/Who';
// import How from './how/How';
import Steps from './steps/Steps';
import Traveler from "./Traveler";
import Hotel from "./Hotel";
import DownloadButton from 'components/DownloadButton';

class Prospectus extends Component {
  render() {
    return (
      <div className="prospectus">
        <DownloadButton label="Get more information " buttonText="Download Whitepaper" href="https://github.com/BookLocal/prospectus/raw/master/BookLocal_prospectus.pdf" fileName="BookLocal-Prospectus" />
        {/* <Hero image="hero-pattern"/> */}
        <What/>
        <Why/>
        <Who/>
        {/* <How/> */}
        <Traveler/>
        <Hotel/>
        {/*<Hero image="exchange-building"/>*/}     
        <Steps/>
      </div>
    );
  }
}

export default Prospectus;
