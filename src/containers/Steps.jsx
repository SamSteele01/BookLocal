import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from './CustomList';
import CustomListItem from './CustomListItem';

export default class Steps extends Component {
    render() {
        return (
            <div>
                <Section margin={{top: 'large'}}> 

                {/* 5 */}
                {/* <Heading align='center'
                    tag='h1'>
                    Steps    
                </Heading> */}
                <div className='heading'>Steps</div>
                <Paragraph size='medium' margin='small'>
                    Below are the key benchmarks toward full adoption.
                </Paragraph>

                {/* 5.1 */}
                <Heading align='center'
                        tag='h2'>
                        The Exchange Building
                </Heading>
                <Paragraph size='medium' margin='small'>
                    The Exchange Building in Memphis, Tennessee will host the first version of
                    BookLocal as it’s own proprietary property management system.
                </Paragraph>

                {/* 5.1.1 */}
                <CustomList title="Proof of Concept"> 
                    <Paragraph size='medium' margin='small'>
                        We proposed a rentable token model (ERC-809) that extends a non-fungible
                        token (as introduced in ERC-721) to provide temporary access for non-owners.
                        Applied to a hotel, our model does the following:
                    </Paragraph>
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        <div>&#8226;</div>
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
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        <div>&#8226;</div>
                        <div>
                            Stores a list of reservations that, 1) map each room to a time, and 2)
                            maps each time to a renter
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        <div>&#8226;</div>
                        <div>
                            Allows the appropriate traveler (with a current reservation) to update
                            the “renter” address of a specific room’s attributes.
                        </div>
                    </CustomListItem>
                    <Paragraph>
                        The contracts for the proof of concept (written in solidity) are available online.
                    </Paragraph>
                    {/* make link to github */}
                </CustomList>

                {/* 5.1.2 */}
                <CustomList title="Minimum Viable Product"> 
                    <Paragraph size='medium' margin='small'>
                        The minimum viable product will extend the Proof of Concept to incorporate
                        full payment functionality and user interfaces.
                    </Paragraph>
                    <CustomList>

                        {/* <div>1.</div> */}
                        <Heading align='center'
                            tag='h3'>
                            1. Multisignature Wallets
                        </Heading>

                        <Paragraph size='medium' margin='small'>
                            To ensure secure payments, we will use industry standard code for our
                            multisignature wallet.
                        </Paragraph>
                    </CustomList>
                    <CustomList>

                        {/* <div>2.</div> */}
                        <Heading align='center'
                            tag='h3'>
                            2. Traveler Interface
                        </Heading>

                        <Paragraph size='medium' margin='small'>
                            Each “Traveler” object inherits functions from a standard wallet. Thus,
                            the minimum viable interface for a traveler will extend the wallet to provide
                            a graphical interface for the following methods:
                        </Paragraph>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                checkRoomStatus(_roomId)
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                reserve(_roomId,_startDate,_stopDate)
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                checkIn(_roomId)
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                checkOut(_roomId)
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                cancel(_roomId,_startDate,_stopDate)
                            </div>
                        </CustomListItem>
                    </CustomList>
                    <CustomList>

                        {/* <div>3.</div> */}
                        <Heading align='center'
                            tag='h3'>
                            3. Hotel Interface
                        </Heading>

                        <Paragraph size='medium' margin='small'>
                            Each “Hotel” object inherits functions from a standard multisignature
                            wallet in order to appropriately handle payments being sent to the contract.
                            In addition to base wallet features, the Hotel will also have access
                            to all methods callable by the traveler (as listed above) with special owner
                            permissions. Further, the minimum viable interface for a hotel will also
                            include a graphical interface for the following methods:
                        </Paragraph>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                newRoom()
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                changeDescription(_roomId)
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                remove(_roomId)
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="steps__card-font"
                        >
                            <div>&#8226;</div>
                            <div>
                                hide(_roomId)
                            </div>
                        </CustomListItem>
                    </CustomList>
                </CustomList>


                {/* 5.2 */}
                <Heading align='center'
                    tag='h2'>
                    Early Adopters
                </Heading>
                <Paragraph size='medium' margin='small'>
                    Once the BookLocal platform is successfully tested at the Exchange Building, we
                    will market the application for use by adventurous travelers, independent hotels,
                    and individuals with extra space. Toward this end, our goal is to provide the
                    following:
                </Paragraph>

                {/* 5.2.1 */}
                <Heading align='center'
                    tag='h3'>
                    Free interface for travelers.
                </Heading>
                <Paragraph size='medium' margin='small'>
                    In particular, we will target the Ethereum development community in order to
                    nurture early versions of the product.
                </Paragraph>

                {/* 5.2.2 */}
                <Heading align='center'
                    tag='h3'>
                    Free interface for individual hosts.
                </Heading>
                <Paragraph size='medium' margin='small'>
                    In order to encourage use, we will provide a free interface for individuals to rent
                    access to their extra space (similar to the AirBnB model).
                </Paragraph>

                {/* 5.2.3 */}
                <Heading align='center'
                    tag='h3'>
                    Paid interface for hotels.
                </Heading>
                <Paragraph size='medium' margin='small'>
                    To address unique attributes of each hotel, we plan to offer custom hotel interfaces
                    as a service (i.e. software-as-a-service) in order to provide each early
                    adopting hotel with their ideal property management system.
                </Paragraph>

                {/* 5.3 */}
                <Heading align='center'
                    tag='h2'>
                    More Adopters
                </Heading>
                <Paragraph size='medium' margin='small'>
                    Once we have a strong community of users, we will target chain hotels by adding
                    features that allow for corporate oversight on overall and hotel specific performance.
                </Paragraph>

                </Section>
            </div>
        )
    }
}
