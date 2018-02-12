import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
// import SearchIcon from 'grommet/components/icons/base/Search';
// import CompareIcon from 'grommet/components/icons/base/Compare';
// import CheckboxSelectedIcon from 'grommet/components/icons/base/CheckboxSelected';
// import MoneyIcon from 'grommet/components/icons/base/Money';
import Search from '../../icons/search.png';
import Compare from '../../icons/git-compare.png';
import Reception from '../../icons/hotel_reception-512-bw.png';
import Housekeeping from '../../icons/housekeeping-round-bw.svg';
import Revenue from '../../icons/revenue-management.png';
import Reserve from '../../icons/reserve-book.png';
import ShoppingCart from '../../icons/shopping-cart.png';
import Sale from '../../icons/point-of-sale.png';
import Report from '../../icons/report.png';
import Channel from '../../icons/channel-management.png';

class What extends Component {

  render() {
    return (
      <div className='what'>
        <Section margin={{top: 'large'}} pad={{vertical: 'large'}}> 

          {/* 1 */}
          {/* <Heading align='center'
            tag='h1'>
            What
          </Heading> */}
          <div className='heading'>What</div>
          <Paragraph size='medium' margin='small'>
            The vision for BookLocal is to connect travelers directly to their hotel of choice
            by creating the first two way property management system accessible as both
            a traveler and a hotel administrator. Simply put, BookLocal is designed to
            remove middlemen from the hotel ecosystem and serve as the single point of
            contact. Successful implementation allows for three key benefits: simplified
            user experiences; lower room prices for the traveler; and higher profits for the
            hotel.
          </Paragraph>
          <Paragraph size='medium' margin='small'>
            At its heart, BookLocal will operate as a series of smart contracts stored on
            the Ethereum blockchain. To interact with the application, special interfaces
            for both hotel workers and travelers will be designed to provide full service
            functionality and replace inefficiencies in the current ecosystem.
          </Paragraph>
          
          <CustomList 
          // title='To the traveler, BookLocal will provide the following features:'
          >
            <Paragraph size='medium' margin='small'>
              To the traveler, BookLocal will provide the following features:
            </Paragraph>
            <CustomListItem 
              // height="auto"
              animation="slide-left"
              color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              {/* <SearchIcon/> */}
              <Image
                size='thumb'
                src={Search}
              />
              Search
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              {/* <CompareIcon/> */}
              <Image
                size='thumb'
                src={Compare}
              />
              Compare
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="auto"
              animation="slide-left"
              color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              {/* <CheckboxSelectedIcon/> */}
              <Image
                size='thumb'
                src={Reserve}
              />
              Book
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"           animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              {/* <MoneyIcon/> */}
              <Image
                size='thumb'
                src={ShoppingCart}
              />
              Purchase
              <div></div>
            </CustomListItem>
          </CustomList>
          <Paragraph size='medium' margin='small'>
            To the hotel, BookLocal will provide modules for:
          </Paragraph>
          {/* add icons */}
          <CustomList>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              <Image
                size='thumb'
                src={Reception}
              />
              Guest Management
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              <Image
                size='thumb'
                src={Housekeeping}
              />
              Housekeeping and Maintenance
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              <Image
                size='thumb'
                src={Revenue}
              />              
              Revenue Management
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              <Image
                size='thumb'
                src={Sale}
              />
              Payment Processing and Point of Sale
              <div></div>
            </CustomListItem>
            <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                // color="$black"
                // bgColor="orange"
                border="1px solid blue"
                borderRad
                classNames="card-font"
              >
              <Image
                size='thumb'
                src={Report}
              />
              Report Generation
              <div></div>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="card-font"
            >
              <Image
                size='thumb'
                src={Channel}
              />
              Channel Management
              <div></div>
            </CustomListItem>
          </CustomList>
        </Section>
      </div>
    );
  }

}

export default What;
