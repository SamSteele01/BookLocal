import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import colors from '../../styles/colors';

class What extends Component {

  render() {
    return (
      <div className='what'>
        <Section
          pad='none'
          align='stretch'
          alignContent='center'
          // appCentered='true'
        >

          {/* 1 */}
          <div className='heading'>What Do we Do?</div>
          <p className='paragraph-white'>
            The vision for BookLocal is to connect travelers directly to their hotel of choice
            by creating the first two way property management system accessible as both
            a traveler and a hotel administrator. Simply put, BookLocal is designed to
            remove middlemen from the hotel ecosystem and serve as the single point of
            contact. Successful implementation allows for three key benefits: simplified
            user experiences; lower room prices for the traveler; and higher profits for the
            hotel.
          </p>
          <p className='paragraph-white'>
            At its heart, BookLocal will operate as a series of smart contracts stored on
            the Ethereum blockchain. To interact with the application, special interfaces
            for both hotel workers and travelers will be designed to provide full service
            functionality and replace inefficiencies in the current ecosystem.
          </p>
            <h2>To the traveler, BookLocal will provide the following features:</h2>

          <CustomList bgColor={colors.gray}>
            <CustomListItem classNames="what__card-font">
              {/* <SearchIcon/> */}
                <h4 class="search-icon">Search</h4>
            </CustomListItem>

            <CustomListItem classNames="what__card-font">
              {/* <CompareIcon/> */}
              <h4 class="compare-icon">Compare</h4>
            </CustomListItem>
            <CustomListItem animation="slide-left" classNames="what__card-font">
              {/* <CheckboxSelectedIcon/> */}
              <h4 className="book-icon">Booking</h4>
            </CustomListItem>
            <CustomListItem
              //height="xsmall"
              animation="slide-left"

              classNames="what__card-font"
            >
              {/* <MoneyIcon/> */}
              <h4 className="cart-icon">Purchase</h4>
            </CustomListItem>
          </CustomList>

            <h2>To the hotel, BookLocal will provide modules for:</h2>

          {/* add icons */}
          <CustomList
            bgColor={colors.gray}
          >
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"

              classNames="what__card-font"
            >
              <h4 className="guest-icon">Guest Management</h4>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"

              classNames="what__card-font"
            >
              <h4 className="housekeeping-icon">Housekeeping and Maintenance</h4>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              classNames="what__card-font"
            >
            <h4 className="revenue-icon">Revenue Management</h4>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              animation="slide-left"
              // color="$black"
              // bgColor="orange"
              classNames="what__card-font"
            >

              Payment Processing and Point of Sale
              <div></div>
            </CustomListItem>
            <CustomListItem
                // height="xsmall"
                animation="slide-left"
                // color="$black"
                // bgColor="orange"
                classNames="what__card-font"
              >
              <h4 className="report-icon">Report Generation</h4>
            </CustomListItem>
            <CustomListItem

              animation="slide-left"

              classNames="what__card-font"
            >

              <h4 class="channel-icon">Channel Management</h4>
              <div></div>
            </CustomListItem>
          </CustomList>
        </Section>
      </div>
    );
  }

}

export default What;
