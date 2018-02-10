import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import SearchIcon from 'grommet/components/icons/base/Search';
import CompareIcon from 'grommet/components/icons/base/Compare';
import CheckboxSelectedIcon from 'grommet/components/icons/base/CheckboxSelected';
import MoneyIcon from 'grommet/components/icons/base/Money';

class What extends Component {

  render() {
    return (
      <div className='what'>
        <Section margin={{top: 'large'}}> 

          {/* 1 */}
          <Heading align='center'
            tag='h2'>
            What
          </Heading>
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
            <CustomListItem>
              <SearchIcon/>
              Search
              <div></div>
            </CustomListItem>
            <CustomListItem>
              <CompareIcon/>
              Compare
              <div></div>
            </CustomListItem>
            <CustomListItem>
              <CheckboxSelectedIcon/>
              Book
              <div></div>
            </CustomListItem>
            <CustomListItem>
              <MoneyIcon/>
              Purchase
              <div></div>
            </CustomListItem>
          </CustomList>
          <Paragraph size='medium' margin='small'>To the hotel, BookLocal will provide modules for:</Paragraph>
          <CustomList>
            <CustomListItem>guest management</CustomListItem>
            <CustomListItem>housekeeping and maintenance</CustomListItem>
            <CustomListItem>revenue management</CustomListItem>
            <CustomListItem>payment processing and point of sale</CustomListItem>
            <CustomListItem>report generation</CustomListItem>
            <CustomListItem>channel management</CustomListItem>
          </CustomList>
        </Section>
      </div>
    );
  }

}

export default What;
