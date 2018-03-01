import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';

class Hotel extends Component {
  render() {
    return(
      <section className="hotel-wrapper section--wrapper">
      <Heading align='center' tag='h2' className="heading">
          Hotel
      </Heading>
      <h3>
          The hotel interface will require the following functionality:
      </h3>

      {/* 4.3.1 */}
      <div className="content-card--wrapper">
      <div className="content-card">
      <Heading align='center' margin='medium' tag='h3'>
          <i className="fas fa-users"></i> Guest Management
      </Heading>
      <p className='paragraph'>
          Guest management includes managing arrivals and departures with any special
          requests. Sub features involve messaging capability between the guest and hotel
          and a variety of viewing options to see arrivals and departures for different time
          scales (i.e. monthly view, weekly view, daily view, and so on).
      </p>
    </div>

      {/* 4.3.2 */}
      <div className="content-card">
        <Heading align='center' margin='medium' tag='h3'>
          <i className="fas fa-home"></i> Housekeeping and Maintenance
      </Heading>
      <p className='paragraph'>
          The housekeeping module will include messaging capabilities, room specific
          cleaning details, a scheduled order and cleaning assignments, and requests for
          supplies and maintenance repairs.
      </p>
    </div>

      {/* 4.3.3 */}
      <div className="content-card">
        <Heading align='center' margin='medium' tag='h3'>
          <i className="fas fa-money-bill-alt"></i> Revenue Management
        </Heading>
      <p className='paragraph'>
          Revenue management will act as a recommendation system to provide different
          pricing options during peak hours or otherwise
      </p>
    </div>

      {/* 4.3.4 */}
      <div className="content-card">
      <Heading align='center' margin='medium' tag='h3'>
          <i className="fas fa-credit-card"></i> Payment Processing
      </Heading>
      <p className='paragraph'>
          Upon checkout, BookLocal will finalize the guest’s plasma chain (or state channel),
          record the final balances, and transfer funds accordingly. This module will
          need to work seamlessly for someone paying with a credit card and incorporate a
          point of sale system with inventory management for hotel purchases (i.e. drinks,
          snacks, toiletry items, and so on).
      </p>
    </div>

      {/* 4.3.5 */}

      <div className="content-card">
      <Heading align='center' margin='medium' tag='h3'>
          <i className="fas fa-chart-line"></i> Report Generation
      </Heading>
      <p className='paragraph'>
          This module will generate industry specific reports used during night audits as
          well as provide real time key performance indicators.
      </p>
    </div>

      {/* 4.3.6 */}
      <div className="content-card">
        <Heading align='center' margin='medium' tag='h3'>
            <i className="fas fa-arrows-alt"></i> Channel Management
          </Heading>
          <p className='paragraph'>
          In order to feasibly integrate into the current ecosystem, BookLocal will include
          channel management functionality to allow travelers the option of booking
          through an online travel agency while still creating a guest specific subchain on
          BookLocal.
        </p>
      </div>
    </div>
      {/* 4.4 */}
      {/*<Heading align='center'
    margin='medium'
          tag='h2'>*/}
      <div className="textbox">
        <h2>Dispute</h2>
          <p>In case of a disputed room charge or rate, the guest or hotel can open a dispute.
          Both the guest and hotel will have a specified amount of time (i.e. two-weeks)
          to submit their claim after which BookLocal will make the final decision. Here,
          the guest’s subchain stays open and unresolved until BookLocal’s decision.</p>
    </div>
    </section>
    )
  }
}

export default Hotel;
