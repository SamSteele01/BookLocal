import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import HeadingDropDown from 'components/HeadingDropDown';
import CustomList from 'components/CustomList';
import CustomListItem from 'components/CustomListItem';
import colors from 'styles/colors';
import WalletImg from "images/wallet.jpg";

export default class ProofOfConcept extends Component {
    render() {
        return (
            <HeadingDropDown className="proof-of-concept" subHeadingName="Proof of Concept">
                {/* 5 */}
                {/* <div className='heading'>Steps</div>
                <p className='paragraph-white'>
                    Below are the key benchmarks toward full adoption.
                </p>  */}
                {/* 5.1.1 */}
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
                <div className="textbox margin-bottom--med">
                  <h2>Minimum Viable Product</h2>
                  <p>
                    The minimum viable product will extend the Proof of Concept to incorporate
                    full payment functionality and user interfaces.
                  </p>
                </div>
                {/* 5.1.2 */}
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
            </HeadingDropDown>
        )
    }
}
