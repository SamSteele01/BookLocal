import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Columns from 'grommet/components/Columns';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import Image from 'grommet/components/Image';
import expandedEcosystemImg from '../../images/expanded-ecosystem.png';
import plasmaChainImg from '../../images/plasma-chain.png';
import colors from '../../styles/colors';

export default class How extends Component {
    render() {
        return (
            <div className="how">
                <Section margin={{top: 'large'}}> 

                    {/* 4 */}
                    {/* <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h2'>
                        How
                    </Heading> */}
                    <div className='heading'>How</div>
                    <Paragraph align='center' size='medium' margin='small'>
                        The heart of BookLocal will reside in a series of smart contracts on the public
                        Ethereum blockchain.
                    </Paragraph>

                    {/* 4.1 */}
                    <CustomList title="Data"> 
                        <Paragraph align='center' size='medium' margin='small'>
                            BookLocal allows travelers to connect directly to the Hotel by way of the
                            room. Figure 3 below represents this flow of information for a simple
                            ecosystem consisting of three hotels and three successful travelers.
                        </Paragraph>
                        <Image 
                            size='large' 
                            src={expandedEcosystemImg}
                            caption='Figure 3: Expanded BookLocal Ecosystem' 
                        />
                        <Paragraph align='center' size='medium' margin='small'>
                            Take note of the following systems:
                        </Paragraph>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="how__card-font"
                        >
                        {/* <div>&#8226;</div> */}
                            <p><u className="bold">BookLocal API:</u> The programming interface for the smart contracts.
                            </p>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="how__card-font"
                        >
                        {/* <div>&#8226;</div> */}
                            <p><u className="bold">Hotel PMS:</u> The hotel interface. The first version (minimum viable
                                product) will provide a simple graphical user interface to interact with
                                the BookLocal API. Full implementation will add the necessary off-chain
                                features described below.
                            </p>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="how__card-font"
                        >
                        {/* <div>&#8226;</div> */}
                            <p><u className="bold">Traveler Interface:</u> The travelers interface will allow a traveler to search
                                for available rooms, compare room attributes, and book the room.
                            </p>
                        </CustomListItem>
                        <Paragraph align='center' size='medium' margin='small'>
                            The ultimate goal for BookLocal is to maintain it’s own plasma subchain (or
                            similar off-chain solution) to handle the bulk of the transactional data. This
                            works to reduce the number of updates to the main Ethereum chain and thus
                            save in transaction fees and increase speed. Further, upon making a
                            reservation, a new subchain (or payment channel) could be created for the
                            hotel guest (a traveler who commits to a hotel becomes a guest) and will
                            terminate upon checkout whereby the final balances are settled. Visually we
                            represent the flow of data below:
                        </Paragraph>
                        <Image 
                            size='large' 
                            src={plasmaChainImg} 
                        />
                    </CustomList>

                    {/* 4.2 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h2'>
                        Traveler
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        With BookLocal, the traveler will be able to search, compare, and book a hotel
                        room. Additionally, we will incorporate a wallet feature that allows the guest
                        to use their phone to pay for dinner, events, or other travel related activities.
                    </Paragraph>

                    {/* 4.2.1 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Search
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        The search feature will be a read only function (i.e. constant insofar as it
                        cannot update the blockchain) that searches for available rooms during your
                        travel. Our vision for this feature is to allow the guest to search the hotel in a
                        visually intuitive manor whereby they can view the hotel, select the floor, and
                        finally look at a view of the entire floor plan to select from available rooms.
                        This feature gives control to the traveler to decide exactly which room and view
                        they want.
                    </Paragraph>

                    {/* 4.2.2 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Compare
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        Compare will again be a read only function that allows the traveler to select
                        some number of rooms or hotels to compare side by side. This can include
                        reviews and pictures from other guests as well as more formal descriptions from
                        the hotel itself.
                    </Paragraph>

                    {/* 4.2.3 */}
                    {/* <CustomList 
                        pad
                        title="Book"
                        maxCount={3}
                        color
                        bgColor
                        border
                        borderRad
                        classNames
                    >  */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h4'>
                        Book
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        When the traveler has found a room they like, they can book the room in one
                        of several ways:
                    </Paragraph>
                    <Columns 
                        responsive={false}
                        masonry={false}
                        justify='center'
                        maxCount={3}
                        // size='small'
                    >
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="how__card-font"
                        >
                            {/* <div>&#8226;</div> */}
                            <div>
                                Send exactly the asking rate.
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="how__card-font"
                        >
                            {/* <div>&#8226;</div> */}
                            <div>
                                Send more than the asking rate and use the BookLocal wallet to pay for
                                food and activities during the trip. This works as a budgeting commitment
                                device to ensure you don’t overspend during your trip.
                            </div>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            border="1px solid blue"
                            borderRad
                            classNames="how__card-font"
                        >
                            {/* <div>&#8226;</div> */}
                            <div>
                                Send some amount less than the upfront asking rate (if booking well in
                                advance) to hold your room for a period of time and pay the remainder
                                closer to the actual check-in date. This option will likely cost more due
                                to the convenience.
                            </div>
                        </CustomListItem>
                    </Columns>
                    {/* </CustomList> */}

                    {/* 4.2.4 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Purchase
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        The purchase function will act as a simple wallet enabling the guest to pay for
                        food, drinks, and events in the local ecosystem.
                    </Paragraph>
                    <Paragraph align='center' size='medium' margin='small'>
                        To give an example: let’s say a traveler, Ann, is willing to spend at most $400
                        for a day and night in Paris. She uses BookLocal to find a hotel that costs
                        $100 per night and decide to book. Since she already knows her desired budget
                        for the weekend, she chooses to book the room by transferring all $400 to the
                        BookLocal holding address. A new subchain is created for her stay which now
                        includes $300 in the wallet to spend in Paris ($400 less $100 for room). Now
                        Ann is able to use the BookLocal app to eat, shop, go to museums, and so on.
                        If at the end of her trip she only spent $250 in total (including room), and
                        there are no room disputes or damages, then the remaining $150 that she
                        didn’t spend will be immediately returned to her upon checkout.
                    </Paragraph>

                    {/* 4.3 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h2'>
                        Hotel
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        The hotel interface will require the following functionality:
                    </Paragraph>

                    {/* 4.3.1 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Guest Management
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        Guest management includes managing arrivals and departures with any special
                        requests. Sub features involve messaging capability between the guest and hotel
                        and a variety of viewing options to see arrivals and departures for different time
                        scales (i.e. monthly view, weekly view, daily view, and so on).
                    </Paragraph>

                    {/* 4.3.2 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Housekeeping and Maintenance
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        The housekeeping module will include messaging capabilities, room specific
                        cleaning details, a scheduled order and cleaning assignments, and requests for
                        supplies and maintenance repairs.
                    </Paragraph>

                    {/* 4.3.3 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Revenue Management
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        Revenue management will act as a recommendation system to provide different
                        pricing options during peak hours or otherwise
                    </Paragraph>

                    {/* 4.3.4 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Payment Processing
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        Upon checkout, BookLocal will finalize the guest’s plasma chain (or state channel),
                        record the final balances, and transfer funds accordingly. This module will
                        need to work seamlessly for someone paying with a credit card and incorporate a
                        point of sale system with inventory management for hotel purchases (i.e. drinks,
                        snacks, toiletry items, and so on).
                    </Paragraph>

                    {/* 4.3.5 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Report Generation
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        This module will generate industry specific reports used during night audits as
                        well as provide real time key performance indicators.
                    </Paragraph>

                    {/* 4.3.6 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h3'>
                        Channel Management
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        In order to feasibly integrate into the current ecosystem, BookLocal will include
                        channel management functionality to allow travelers the option of booking
                        through an online travel agency while still creating a guest specific subchain on
                        BookLocal.
                    </Paragraph>

                    {/* 4.4 */}
                    <Heading align='center' 
 	 	 	 	 	 	 margin='medium'
                        tag='h2'>
                        Dispute
                    </Heading>
                    <Paragraph align='center' size='medium' margin='small'>
                        In case of a disputed room charge or rate, the guest or hotel can open a dispute.
                        Both the guest and hotel will have a specified amount of time (i.e. two-weeks)
                        to submit their claim after which BookLocal will make the final decision. Here,
                        the guest’s subchain stays open and unresolved until BookLocal’s decision.
                    </Paragraph>

                </Section>
            </div>
        )
    }
}
