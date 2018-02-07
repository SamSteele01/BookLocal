import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';

class What extends Component {

  render() {
    return (
      <div>
        <Paragraph size='large' margin='small'>
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
      </div>
    );
  }

}

export default What;
