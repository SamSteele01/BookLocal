import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from './CustomList';
import CustomListItem from './CustomListItem';
import colors from '../styles/colors';

export default class Steps extends Component {
    render() {
        return (
            <div className="steps">
                <Section 
                    // margin={{top: 'large'}}
                    pad='none'
                    align='stretch'
                    alignContent='center'
                    appCentered='true'
                > 

                {/* 5 */}
                {/* <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                    tag='h1'>
                    Steps    
                </Heading> */}
                <div className='heading'>Steps</div>
                <p className='paragraph-white'>
                    Below are the key benchmarks toward full adoption.
                </p>

                {/* 5.1 */}
                <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        margin='medium'
                        tag='h2'>
                        The Exchange Building
                </Heading>
                <p className='paragraph-white'>
                    The Exchange Building in Memphis, Tennessee will host the first version of
                    BookLocal as it’s own proprietary property management system.
                </p>

                {/* 5.1.1 */}
                <Heading 
                    align='center'
                    margin='medium'
                    tag='h4'>
                    Proof of Concept
                </Heading>
                <p className='paragraph-white'>
                    We proposed a rentable token model (ERC-809) that extends a non-fungible
                    token (as introduced in ERC-721) to provide temporary access for non-owners.
                    Applied to a hotel, our model does the following:
                </p>
                <CustomList 
                    bgColor={colors.gray}
                > 
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
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
                         {/* <div>&#8226;</div> */} 
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
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
                        <div>
                            Allows the appropriate traveler (with a current reservation) to update
                            the “renter” address of a specific room’s attributes.
                        </div>
                    </CustomListItem>
                    {/* make link to github */}
                </CustomList>
                    <p className='paragraph-white'>
                        The contracts for the proof of concept (written in solidity) are available online.
                    </p>

                {/* 5.1.2 */}
                <Heading 
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
                </p>
                
                {/* <div>1.</div> */}
                <Heading align='center' 
                    margin='medium'
                    tag='h3'>
                    1. Multisignature Wallets
                </Heading>
                <p className='paragraph-white'>
                    To ensure secure payments, we will use industry standard code for our
                    multisignature wallet.
                </p>
                   
                {/* <div>2.</div> */}
                <Heading align='center' 
                    margin='medium'
                    tag='h3'>
                    2. Traveler Interface
                </Heading>

                <p className='paragraph-white'>
                    Each “Traveler” object inherits functions from a standard wallet. Thus,
                    the minimum viable interface for a traveler will extend the wallet to provide
                    a graphical interface for the following methods:
                </p>
                <CustomList
                    bgColor={colors.gray}
                >
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
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
                        {/* <div>&#8226;</div> */}
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
                        {/* <div>&#8226;</div> */}
                        <div>
                            checkIn(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
                        <div>
                            checkOut(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
                        <div>
                            cancel(_roomId,_startDate,_stopDate)
                        </div>
                    </CustomListItem>
                </CustomList>

                {/* <div>3.</div> */}
                <Heading align='center' 
                    margin='medium'
                    tag='h3'>
                    3. Hotel Interface
                </Heading>

                <p className='paragraph-white'>
                    Each “Hotel” object inherits functions from a standard multisignature
                    wallet in order to appropriately handle payments being sent to the contract.
                    In addition to base wallet features, the Hotel will also have access
                    to all methods callable by the traveler (as listed above) with special owner
                    permissions. Further, the minimum viable interface for a hotel will also
                    include a graphical interface for the following methods:
                </p>
                <CustomList
                    bgColor={colors.gray}
                >
                    <CustomListItem
                        //height="auto"
                        // animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
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
                        {/* <div>&#8226;</div> */}
                        <div>
                            changeDescription(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
                        <div>
                            remove(_roomId)
                        </div>
                    </CustomListItem>
                    <CustomListItem
                        //height="auto"
                        animation="slide-left"
                        // color="$black"
                        // bgColor="orange"
                        border="1px solid blue"
                        borderRad
                        classNames="steps__card-font"
                    >
                        {/* <div>&#8226;</div> */}
                        <div>
                            hide(_roomId)
                        </div>
                    </CustomListItem>
                </CustomList>
                


                {/* 5.2 */}
                <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                    tag='h2'>
                    Early Adopters
                </Heading>
                <p className='paragraph-white'>
                    Once the BookLocal platform is successfully tested at the Exchange Building, we
                    will market the application for use by adventurous travelers, independent hotels,
                    and individuals with extra space. Toward this end, our goal is to provide the
                    following:
                </p>

                {/* 5.2.1 */}
                <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                    tag='h3'>
                    Free interface for travelers.
                </Heading>
                <p className='paragraph-white'>
                    In particular, we will target the Ethereum development community in order to
                    nurture early versions of the product.
                </p>

                {/* 5.2.2 */}
                <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                    tag='h3'>
                    Free interface for individual hosts.
                </Heading>
                <p className='paragraph-white'>
                    In order to encourage use, we will provide a free interface for individuals to rent
                    access to their extra space (similar to the AirBnB model).
                </p>

                {/* 5.2.3 */}
                <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                    tag='h3'>
                    Paid interface for hotels.
                </Heading>
                <p className='paragraph-white'>
                    To address unique attributes of each hotel, we plan to offer custom hotel interfaces
                    as a service (i.e. software-as-a-service) in order to provide each early
                    adopting hotel with their ideal property management system.
                </p>

                {/* 5.3 */}
                <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                    tag='h2'>
                    More Adopters
                </Heading>
                <p className='paragraph-white'>
                    Once we have a strong community of users, we will target chain hotels by adding
                    features that allow for corporate oversight on overall and hotel specific performance.
                </p>

                </Section>
            </div>
        )
    }
}
