import React, { Component } from 'react';
import 'styles/App.css';
import 'grommet/grommet.min.css'; //vanilla styles
import Hero from 'components/Hero';
import What from './what/What';
import Why from './why/Why';
import Who from './who/Who';
import How from './how/How';
import Steps from './steps/Steps';
import Traveler from "./Traveler";
import Hotel from "./Hotel";


class Prospectus extends Component {
  render() {
    return (
      <div className="prospectus">
        {/* <Hero image="hero-pattern"/> */}
        <What/>
        <Why/>
        <Who/>
        <How/>
        <Traveler/>
        <Hotel/>
        {/*<Hero image="exchange-building"/>*/}     
        <Steps/>
      </div>
    );
  }
}

export default Prospectus;
