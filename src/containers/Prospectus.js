import React, { Component } from 'react';
import '../styles/App.css';
import 'grommet/grommet.min.css'; //vanilla styles
import Hero from '../components/Hero';
import What from './what/What';
import Why from './why/Why';
import Who from './who/Who';
import How from './how/How';
import Steps from './Steps';
import Traveler from "./Traveler";
import Hotel from "./Hotel";
import Exchange from "./Exchange";

class Prospectus extends Component {
  render() {
    return (
      <div className="prospectus">
        {/* <Header/> */}
        <Hero image="hero-pattern"/>
        {/* <Header/> */}
        <What/>
        {/* <Header/> */}
        <Why/>
        {/* <Header/> */}
        <Who/>
        {/* <Header/> */}
        <How/>
        <Traveler/>
        <Hotel/>
        {/*<Hero image="exchange-building"/>*/}
        {/* <Header/> */}
        <Exchange/>
        <Steps/>
      </div>
    );
  }
}

export default Prospectus;
