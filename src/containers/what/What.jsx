import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
// import Tiles from 'grommet/components/Tiles';
// import Tile from 'grommet/components/Tile';
// import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import SearchIcon from 'grommet/components/icons/base/Search';
import CompareIcon from 'grommet/components/icons/base/Compare';
import CheckboxSelectedIcon from 'grommet/components/icons/base/CheckboxSelected';
import MoneyIcon from 'grommet/components/icons/base/Money';

class What extends Component {

  render() {
    return (
      <div className='what'>
        <h3>What</h3>
        <Paragraph size='medium' margin='medium'>
          The vision for BookLocal is to connect travelers directly to their hotel of choice
          by creating the first two way property management system accessible as both
          a traveler and a hotel administrator. Simply put, BookLocal is designed to
          remove middlemen from the hotel ecosystem and serve as the single point of
          contact. Successful implementation allows for three key benefits: simplified
          user experiences; lower room prices for the traveler; and higher profits for the
          hotel.
        </Paragraph>
        <Paragraph>
          At its heart, BookLocal will operate as a series of smart contracts stored on
          the Ethereum blockchain. To interact with the application, special interfaces
          for both hotel workers and travelers will be designed to provide full service
          functionality and replace inefficiencies in the current ecosystem.
        </Paragraph>
        <Paragraph>To the traveler, BookLocal will provide the following features:</Paragraph>
        <Columns
          responsive={false}
          >
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'>
            <SearchIcon/>
            Search
            {/* <Value value={2} /> */}
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'>
            <CompareIcon/>
            Compare
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'>
            <CheckboxSelectedIcon/>
            Book
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'>
            <MoneyIcon/>
            Purchase
          </Box>
        </Columns>
        <Paragraph>To the hotel, BookLocal will provide modules for:</Paragraph>
          <ul>
            <li>guest management</li>
            <li>housekeeping and maintenance</li>
            <li>revenue management</li>
            <li>payment processing and point of sale</li>
            <li>report generation</li>
            <li>channel management</li>
          </ul>
      </div>
    );
  }

}

export default What;
