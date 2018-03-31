import React, { Component } from 'react';
import HeadingDropDown from '../../components/HeadingDropDown';
import Exchange from "./Exchange";
import ProofOfConcept from "./ProofOfConcept";
import EarlyAdoptors from "./EarlyAdoptors";

export default class Steps extends Component {
    render() {
        return (
            // <section className="steps__section section--wrapper">
            <HeadingDropDown className="steps__section" headingName="Steps">
                <Exchange/>
                <ProofOfConcept/>
                <EarlyAdoptors/> 
            </HeadingDropDown>
        )
    }
}
