import React, { Component } from 'react'
import Heading from 'grommet/components/Heading';
import HeadingDropDown from 'components/HeadingDropDown';
import CouchImg from "images/couch.jpg";
import HotelImg from "images/hotel.jpg";
import TravelersImg from "images/travelers.jpg";

export default class EarlyAdoptors extends Component {
    render() {
        return (
            <HeadingDropDown className="early-adopters" subHeadingName="Early Adopters">
                {/* 5.2 */}
                <h3>Once the BookLocal platform is successfully tested at the Exchange Building, we
                    will market the application for use by adventurous travelers, independent hotels,
                    and individuals with extra space. Once we have a strong community of users, we will target chain hotels by adding
                        features that allow for corporate oversight on overall and hotel specific performance. Toward this end, our goal is to provide the
                    following:</h3>
                {/* 5.2.1 */}
                <div className="content-card--wrapper">
                  <div className="content-card">
                <Heading align='center' margin='medium' tag='h3'>
                    Free interface for travelers.
                </Heading>
                <p className='paragraph'>
                    In particular, we will target the Ethereum development community in order to
                    nurture early versions of the product.
                </p>
                <img className="image-md" alt="hotel-bed" src={TravelersImg}/>
              </div>
                {/* 5.2.2 */}
                <div className="content-card">
                <Heading align='center' margin='medium' tag='h3'>
                    Free interface for individual hosts.
                </Heading>
                <p className='paragraph'>
                    In order to encourage use, we will provide a free interface for individuals to rent
                    access to their extra space (similar to the AirBnB model).
                </p>
                <img className="image-md" alt="hotel-bed" src={CouchImg}/>
              </div>
                {/* 5.2.3 */}
                <div className="content-card">
                <Heading align='center' margin='medium' tag='h3'>
                    Paid interface for hotels.
                </Heading>
                <p className='paragraph'>
                    To address unique attributes of each hotel, we plan to offer custom hotel interfaces
                    as a service (i.e. software-as-a-service) in order to provide each early
                    adopting hotel with their ideal property management system.
                </p>
                <img className="image-md" alt="hotel-bed" src={HotelImg}/>
              </div>
            </div>
                {/* 5.3 */}
                {/*<Heading align='center'
 	 	 	 	 	 	 margin='medium'
                    tag='h2'>
                    More Adopters
                </Heading>
                <p className='paragraph-white'>
                    Once we have a strong community of users, we will target chain hotels by adding
                    features that allow for corporate oversight on overall and hotel specific performance.
                </p> */}
                <div className="textbox">
                  <h2>Contracts</h2>
                  <p>The contracts for the proof of concept (written in solidity) are available online.</p>
                </div>
            {/* </section> */}
            </HeadingDropDown>
        )
    }
}
