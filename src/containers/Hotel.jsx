import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Columns from 'grommet/components/Columns';
import CustomList from './CustomList';
import CustomListItem from './CustomListItem';
import Image from 'grommet/components/Image';

class Hotel extends Component {
  render() {
    return(
      <section>
      <Heading align='center'
    margin='medium'
          tag='h2'>
          Hotel
      </Heading>
      <p className='paragraph'>
          The hotel interface will require the following functionality:
      </p>

      {/* 4.3.1 */}
      <Heading align='center'
    margin='medium'
          tag='h3'>
          Guest Management
      </Heading>
      <p className='paragraph'>
          Guest management includes managing arrivals and departures with any special
          requests. Sub features involve messaging capability between the guest and hotel
          and a variety of viewing options to see arrivals and departures for different time
          scales (i.e. monthly view, weekly view, daily view, and so on).
      </p>

      {/* 4.3.2 */}
      <Heading align='center'
    margin='medium'
          tag='h3'>
          Housekeeping and Maintenance
      </Heading>
      <p className='paragraph'>
          The housekeeping module will include messaging capabilities, room specific
          cleaning details, a scheduled order and cleaning assignments, and requests for
          supplies and maintenance repairs.
      </p>

      {/* 4.3.3 */}
      <Heading align='center'
    margin='medium'
          tag='h3'>
          Revenue Management
      </Heading>
      <p className='paragraph'>
          Revenue management will act as a recommendation system to provide different
          pricing options during peak hours or otherwise
      </p>

      {/* 4.3.4 */}
      <Heading align='center'
    margin='medium'
          tag='h3'>
          Payment Processing
      </Heading>
      <p className='paragraph'>
          Upon checkout, BookLocal will finalize the guest’s plasma chain (or state channel),
          record the final balances, and transfer funds accordingly. This module will
          need to work seamlessly for someone paying with a credit card and incorporate a
          point of sale system with inventory management for hotel purchases (i.e. drinks,
          snacks, toiletry items, and so on).
      </p>

      {/* 4.3.5 */}
      <Heading align='center'
    margin='medium'
          tag='h3'>
          Report Generation
      </Heading>
      <p className='paragraph'>
          This module will generate industry specific reports used during night audits as
          well as provide real time key performance indicators.
      </p>

      {/* 4.3.6 */}
      <Heading align='center'
    margin='medium'
          tag='h3'>
          Channel Management
      </Heading>
      <p className='paragraph'>
          In order to feasibly integrate into the current ecosystem, BookLocal will include
          channel management functionality to allow travelers the option of booking
          through an online travel agency while still creating a guest specific subchain on
          BookLocal.
      </p>

      {/* 4.4 */}
      <Heading align='center'
    margin='medium'
          tag='h2'>
          Dispute
      </Heading>
      <p className='paragraph'>
          In case of a disputed room charge or rate, the guest or hotel can open a dispute.
          Both the guest and hotel will have a specified amount of time (i.e. two-weeks)
          to submit their claim after which BookLocal will make the final decision. Here,
          the guest’s subchain stays open and unresolved until BookLocal’s decision.
      </p>
    </section>
    )
  }
}

export default Hotel;
