import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import CustomList from './CustomList';
import CustomListItem from './CustomListItem';
import colors from '../styles/colors';
import WalletImg from "../images/wallet.jpg";
import CouchImg from "../images/couch.jpg";
import HotelImg from "../images/hotel.jpg";
import TravelersImg from "../images/travelers.jpg";

export default class Steps extends Component {
    render() {
        return (
            <section className="steps__section section--wrapper">
              <Heading align='center' tag='h2' className="heading">
                  Steps - Proof of Concept
              </Heading>
                {/*<Section
                    pad='none'
                    align='stretch'
                    alignContent='center'
                    // appCentered='true'
                >*/}

                {/* 5 */}
            {   /* <div className='heading'>Steps</div>
                <p className='paragraph-white'>
                    Below are the key benchmarks toward full adoption.
                </p>*/}

                {/* 5.1 */}
            {  /*  <Heading align='center'
 	 	 	 	 	 	 margin='medium'
                        margin='medium'
                        tag='h2'>
                        The Exchange Building
                </Heading>
                <p className='paragraph-white'>
                    The Exchange Building in Memphis, Tennessee will host the first version of
                    BookLocal as it’s own proprietary property management system.
                </p>*/}

                {/* 5.1.1 */}
                {/*<Heading
                    align='center'
                    margin='medium'
                    tag='h4'>
                    Proof of Concept
                </Heading>*/}
                <h3>
                    We proposed a rentable token model (ERC-809) that extends a non-fungible
                    token (as introduced in ERC-721) to provide temporary access for non-owners.
                    <br/>Applied to a hotel, our model does the following:
                </h3>
                <CustomList
                    bgColor={colors.gray}
                >
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        classNames="steps__card-font"
                    >
                        <div>
                            Defines “Room” as a structure consisting of an owner address, renter
                            address, and optional room attributes.
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"

                        classNames="steps__card-font"
                    >
                        <div>
                            Stores a list of reservations that, 1) map each room to a time, and 2)
                            maps each time to a renter
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"

                        classNames="steps__card-font"
                    >
                        <div>
                            Allows the appropriate traveler (with a current reservation) to update
                            the “renter” address of a specific room’s attributes.
                        </div>
                    </CustomListItem>
                    {/* make link to github */}
                </CustomList>
                <div class="textbox margin-bottom--med">
                  <h2>Minimum Viable Product</h2>
                  <p>
                    The minimum viable product will extend the Proof of Concept to incorporate
                    full payment functionality and user interfaces.
                  </p>
                </div>


                {/* 5.1.2 */}
              { /*<Heading
                    align='center'
                    margin='medium'
                    tag='h2'>
                    Proof of Concept
                </Heading>
                <Heading
                    align='center'
                    margin='medium'
                    tag='h3'>
                    Minimum Viable Product
                </Heading>
                <p className='paragraph-white'>
                    The minimum viable product will extend the Proof of Concept to incorporate
                    full payment functionality and user interfaces.
                </p>*/}
                <div className="content-card--wrapper">
                  <div className="content-card">
                    <Heading align='center'
                        margin='medium'
                        tag='h3'>
                        1. Multisignature Wallets
                    </Heading>
                    <p className='paragraph'>
                        To ensure secure payments, we will use industry standard code for our
                        multisignature wallet.</p>
                        <img className="image-md" alt="wallet" src={WalletImg}/>
                  </div>
                  <div className="content-card">
                    <Heading align='center'
                        margin='medium'
                        tag='h3'>
                        2. Traveler Interface
                    </Heading>
                    <p className='paragraph'>
                        Each “Traveler” object inherits functions from a standard wallet. Thus,
                        the minimum viable interface for a traveler will extend the wallet to provide
                        a graphical interface for the following methods:</p>
                        <ul>
                          <li>checkRoomStatus(_roomId)</li>
                          <li>reserve(_roomId,_startDate,_stopDate)</li>
                          <li>checkIn(_roomId)</li>
                          <li>checkRoomStatus(_roomId)</li>
                          <li>checkOut(_roomId)</li>
                          <li>cancel(_roomId,_startDate,_stopDate)</li>
                        </ul>
                  </div>

              {/*  <CustomList
                    bgColor={colors.gray}
                >
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"

                        classNames="steps__card-font"
                    >
                        <div>
                            checkRoomStatus(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"

                        classNames="steps__card-font"
                    >
                        <div>
                            reserve(_roomId,_startDate,_stopDate)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"

                        classNames="steps__card-font"
                    >
                        <div>
                            checkIn(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"

                        classNames="steps__card-font"
                    >
                        <div>
                            checkOut(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"

                        classNames="steps__card-font"
                    >
                        <div>
                            cancel(_roomId,_startDate,_stopDate)
                        </div>
                    </CustomListItem>
                </CustomList>*/}
                <div className="content-card">
                  <Heading align='center'
                      margin='medium'
                      tag='h3'>
                      3. Hotel Interface
                  </Heading>
                  <p className='paragraph'>
                      Each “Hotel” object inherits functions from a standard multisignature
                      wallet in order to appropriately handle payments being sent to the contract.
                      In addition to base wallet features, the Hotel will also have access
                      to all methods callable by the traveler (as listed above) with special owner
                      permissions. Further, the minimum viable interface for a hotel will also
                      include a graphical interface for the following methods:</p>
                      <ul>
                        <li>newRoom()</li>
                        <li>changeDescription(_roomId)</li>
                        <li>remove(_roomId)</li>
                        <li>hide(_roomId)</li>
                      </ul>
                </div>
              </div>



                {/*<CustomList bgColor={colors.gray >
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        classNames="steps__card-font">
                        <div>
                            newRoom()
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"

                        classNames="steps__card-font"
                    >
                        <div>
                            changeDescription(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"

                        classNames="steps__card-font"
                    >
                        <div>
                            remove(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid $bl-blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        <div>
                            hide(_roomId)
                        </div>
                    </CustomListItem>
                </CustomList> */}



                {/* 5.2 */}
                <Heading align='center' margin='medium' tag='h2' className="heading">
                    Early Adopters
                </Heading>
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
            </section>
        )
    }
}
