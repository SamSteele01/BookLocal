import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import "../styles/Traveler.scss";



class Traveler extends Component {
  render() {
    return(

      <div className="traveler-wrapper">
      <Heading align='center'
      margin='medium'
          tag='div' className="heading">
          Traveler
      </Heading>
      <h3>
          With BookLocal, the traveler will be able to search, compare, and book a hotel
          room. Additionally, we will incorporate a wallet feature that allows the guest
          to use their phone to pay for dinner, events, or other travel related activities.
      </h3>

      {/* 4.2.1 */}
      <div className="traveler-block-wrapper">
      <div class="traveler-block">
      <Heading align='center'
      margin='medium'
          tag='h3'>
          <i class="fas fa-search"></i> Search
      </Heading>
      <p className='paragraph'>
          The search feature will be a read only function (i.e. constant insofar as it
          cannot update the blockchain) that searches for available rooms during your
          travel. Our vision for this feature is to allow the guest to search the hotel in a
          visually intuitive manor whereby they can view the hotel, select the floor, and
          finally look at a view of the entire floor plan to select from available rooms.
          This feature gives control to the traveler to decide exactly which room and view
          they want.
      </p>
    </div>

      {/* 4.2.2 */}
      <div class="traveler-block">
      <Heading align='center'
      margin='medium'
          tag='h3'>
          <i class="fas fa-exchange-alt"></i> Compare
      </Heading>
      <p className='paragraph'>
          Compare will again be a read only function that allows the traveler to select
          some number of rooms or hotels to compare side by side. This can include
          reviews and pictures from other guests as well as more formal descriptions from
          the hotel itself.
      </p>
      <img className="image-sml" alt="hotel-bed" src="https://images.unsplash.com/photo-1515362655824-9a74989f318e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ea8d1494f9311d9f9fad346fcbd6252&auto=format&fit=crop&w=2850&q=80"/>
    </div>

      {/* 4.2.3 */}
      <div class="traveler-block">

      <Heading align='center'
      margin='medium'
          tag='h3'>
          <i class="fas fa-book"></i> Book
      </Heading>
      <p className='paragraph'>
          When the traveler has found a room they like, they can book the room in one
          of several ways:
      </p>
      <ul>
        <li>Send exactly the asking rate.</li>
        <li>Send more than the asking rate and use the BookLocal wallet to pay for
        food and activities during the trip. This works as a budgeting commitment
        device to ensure you don’t overspend during your trip.</li>
        <li>Send some amount less than the upfront asking rate (if booking well in
        advance) to hold your room for a period of time and pay the remainder
        closer to the actual check-in date. This option will likely cost more due
        to the convenience.</li>


      </ul>
    </div>
  </div>
{  /*  <Columns
          responsive={false}
          masonry={false}
          justify='center'
          maxCount={3}
      >
          <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid #3675B6"
              classNames="how__card-font"
          >
              <div>
                  Send exactly the asking rate.
              </div>
          </CustomListItem>
          <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid #3675B6"
              classNames="how__card-font"
          >
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
              border="1px solid #3675B6"
              classNames="how__card-font"
          >
              <div>
                  Send some amount less than the upfront asking rate (if booking well in
                  advance) to hold your room for a period of time and pay the remainder
                  closer to the actual check-in date. This option will likely cost more due
                  to the convenience.
              </div>
          </CustomListItem>
      </Columns>*/}

      {/* 4.2.4 */}
      <div class="purchase-wrapper">
      {/*Heading align='center'
      margin='medium'
          tag='h3'>
          Purchase
      </Heading>*/}
      <p className='paragraph'>
        <h2>Purchase</h2>
          The purchase function will act as a simple wallet enabling the guest to pay for
          food, drinks, and events in the local ecosystem.
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
      </p>
      </div>
    </div>
    );
  }
}

export default Traveler;
