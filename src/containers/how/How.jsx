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
                <Section
                    margin="none"
                    pad='none'
                    align='stretch'
                    alignContent='center'
                    // appCentered='true'
                    alignSelf='center'
                    // justify='center'
                >

                    {/* 4 */}
                    <div className='heading'>How</div>
                    <div className="how-section-wrapper">
                    <p className='paragraph-white'>
                        The heart of BookLocal will reside in a series of smart contracts on the public
                        Ethereum blockchain. BookLocal allows travelers to connect directly to the Hotel by way of the
                        room. Figure 3 below represents this flow of information for a simple
                        ecosystem consisting of three hotels and three successful travelers. <strong>Take note of the systems below:</strong>

                    </p>
                    <div className='image-container'>
                        <img
                            src={expandedEcosystemImg}
                            clvassName='image'
                        />
                        <span>Figure 3: Expanded BookLocal Ecosystem</span>
                    </div>
                  </div>

                    {/* 4.1 */}
                  {  /*<Heading
                        align='center'
                        margin='medium'
                        tag='h4'>
                        Data
                    </Heading> */}





                    <CustomList
                        pad="medium"
                        bgColor={colors.gray}
                    >
                        <CustomListItem
                            //height="auto"
                            //margin="10px"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            //border="1px solid {blue}"
                            classNames="how__card-font"
                        >
                        {/* <div>&#8226;</div> */}
                            <p><strong><i class="fas fa-edit"></i> BookLocal API: <br/></strong>The programming interface for the smart contracts.
                            </p>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            //margin="10px"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            //border="1px solid #3675B6"
                            classNames="how__card-font"
                        >
                        {/* <div>&#8226;</div> */}
                            <p><strong><i class="fas fa-building"></i> Hotel PMS: <br/></strong>The hotel interface. The first version (minimum viable
                                product) will provide a simple graphical user interface to interact with
                                the BookLocal API. Full implementation will add the necessary off-chain
                                features described below.
                            </p>
                        </CustomListItem>
                        <CustomListItem
                            //height="auto"
                            //margin="10px"
                            // animation="slide-left"
                            // color="$black"
                            // bgColor="orange"
                            //border="1px solid #3675B6"
                            classNames="how__card-font"
                        >
                        {/* <div>&#8226;</div> */}
                            <p><strong><i class="fas fa-user"></i> Traveler Interface:<br/></strong> The travelers interface will allow a traveler to search
                                for available rooms, compare room attributes, and book the room.
                            </p>
                        </CustomListItem>
                    </CustomList>
                    <div className="how-section-wrapper">
                    <p className='paragraph'>
                        The ultimate goal for BookLocal is to maintain it’s own plasma subchain (or
                        similar off-chain solution) to handle the bulk of the transactional data. This
                        works to reduce the number of updates to the main Ethereum chain and thus
                        save in transaction fees and increase speed. Further, upon making a
                        reservation, a new subchain (or payment channel) could be created for the
                        hotel guest (a traveler who commits to a hotel becomes a guest) and will
                        terminate upon checkout whereby the final balances are settled. Visually we
                        represent the flow of data below:
                    </p>

                    <div className='image-container'>
                        <img
                            src={plasmaChainImg}
                            className='image'
                        />
                    </div>
                  </div>


                    {/* 4.3 */}


                </Section>
            </div>
        )
    }
}
