import React, { Component } from 'react';
import '../styles/App.css';
import 'grommet/grommet.min.css'; //vanilla styles
import Header from '../components/Header';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import What from './what/What';
import Why from './why/Why';
import Who from './who/Who';
import How from './how/How';
import Steps from './Steps';
import Footer from '../components/Footer';

class Prospectus extends Component {
  render() {
    return (
      <div className="Prospectus">
        <Header/>
        <Logo/>
        <Hero image="blockchain"/>
        <Header/>
        <What/>
        <Header/>
        <Why/>
        <Header/>
        <Who/>
        <Header/>
        <How/>
        <Hero image="exchange-building"/>
        <Header/>
        <Steps/>
        <Footer/>
      </div>
    );
  }
}

export default Prospectus;
