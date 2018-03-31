import React, { Component } from 'react';
// import Heading from 'grommet/components/Heading';
import HeadingDropDown from 'components/HeadingDropDown';
import Box from 'grommet/components/Box';
import CustomList from 'components/CustomList';
import CustomListItem from 'components/CustomListItem';
import colors from 'styles/colors';

class Problems extends Component {

  render() {
    return (
      // <div className="problems section--wrapper">
        
        <HeadingDropDown className="problems" subHeadingName="Problems">
          <p className='paragraph-white'>
            The hotel booking industry is fragmented with no fewer than five different
            groups working for commission between travelers and hotels. Problems include:
          </p>
        
            {/* needs to only be one or three cards wide, not two */}
            <CustomList title="High commission payments."
              >
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.headerGray}
                classNames="why__card-font"
              >
                Online travel agents (OTA) receive 15-25% commission per room.
              </CustomListItem>
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.gray}
                classNames="why__card-font"
              >
                Other necessary software packages (i.e. channel manager and property
                management systems) also require monthly usage fees.
              </CustomListItem>
              <CustomListItem
                // height="xsmall"
                animation="slide-left"
                color="white"
                bgColor={colors.headerGray}
                classNames="why__card-font"
              >
                These additional payments increase rates for travelers while lowering profit
                for the hotels.
              </CustomListItem>
            </CustomList>
            <Box
              direction='row'
              justify='around'
              align='center'
              alignSelf='stretch'
              // full='horizontal'
              flex='grow'
              // size={{height: height, width: 'full'}}
              responsive={false}
              wrap={false}
              pad='medium'
              margin='small'
            >
              <div style={{fontSize: 18, marginBottom: -55}}>
                Abuse of power in legal agreements.
              </div>

              {/* <div className='image-container'>
                <img
                    src={ecosystem2}
                    className='image'
                />
                <span>Figure 2: BookLocal Ecosystem</span>
              </div> */}

            </Box>
            <CustomList >
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.blue2}
                classNames="why__card-font"
              >
                <div>
                  <i className="underline">Last available room</i> clause requires hotels to give the OTA access their last
                  room(s) when near capacity. Because of the high commission rates, this
                  can cause hotels to pass on revenue from more profitable booking options
                  (i.e. last minute walk-ins).
                </div>
              </CustomListItem>
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.blue1}
                classNames="why__card-font"
              >
                <div>
                  <i className="underline">Rate parity</i> clause forbids the hotel from renting a room at a lower price
                  through any other source, including their own website, from which they
                  could charge a lower price to the traveler and still receive higher profit.
                </div>
              </CustomListItem>
              <CustomListItem
                // height="xsmall"
                animation="slide-left"
                color="white"
                bgColor={colors.blue2}
                classNames="why__card-font"
              >
                <div>
                  <i className="underline">Blanket use of trademark rights</i> allows an OTA to bid on google ad-words
                  for higher listing than the hotel’s brand website.
                </div>
              </CustomListItem>
            </CustomList>
            <CustomList title="Fragmented computer systems.">
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.headerGray}
                classNames="why__card-font"
              >
                Since many of the computers systems are only designed to handle specific
                tasks (i.e. channel manager, property management system, point of sale,
                housekeeping module), training costs are very high for new employees and
                leads to situations where only a few managers may know how to use all
                the necessary systems.
              </CustomListItem>
              <CustomListItem
                // height="xsmall"
                animation="slide-left"
                color="white"
                bgColor={colors.gray}
                classNames="why__card-font"
              >
                Current property management systems allow for various rate plans, seasonal
                rates, and room types, but often must be entered manually by the
                revenue management department. This can limit responsiveness for special
                event packages.
              </CustomListItem>
            </CustomList>
        </HeadingDropDown>  
      // </div>
    );
  }

}

export default Problems;
