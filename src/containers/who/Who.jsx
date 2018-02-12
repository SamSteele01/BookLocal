import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import Image from 'grommet/components/Image';
import ecosystem from '../../images/hotel-current-ecosystem.png';
import ecosystem2 from '../../images/booklocal-ecosystem.png';

class Who extends Component {

  render() {
    return (
      <div>
        <Section margin={{top: 'large'}}> 

          {/* 3 */}
          {/* <Heading align='center'
            tag='h2'>
            Who
          </Heading> */}
          <div className='heading'>Who</div>
          <Paragraph size='medium' margin='small'>
            The current ecosystem has too many players trying to earn a share of the final room price. Figure 1 shows the network of relationships, each of which is explained below.
          </Paragraph>

          {/* 3.1 */}
          <CustomList title="Ecosystem"> 
            <Paragraph size='medium' margin='small'>
              Below is a visual representation of the various paths through which a traveler
              can book a room. The red arrows indicate the most used reservation path.
            </Paragraph>
          </CustomList>
          <Image 
            size='large' 
            src={ecosystem}
            caption='Figure 1: Current Ecosystem' 
          />

          {/* 3.2 */}
          <Heading align='center'
            tag='h3'> 
            Players
          </Heading>
          <Paragraph size='medium' margin='small'>
            We describe the main players in the ecosystem by including a brief history and
            discussing the value they add and cost they subtract from the industry.
          </Paragraph>

          {/* 3.2.1 */}
          <CustomList title="Travel Agent"> 
            <Paragraph size='medium' margin='small'>
              Travel agents appeared first as an intermediary between travelers and hotels
              in order to facilitate trip planning. While the internet has left brick and mortar
              travel agencies largely obsolete, they do still exist and are often helpful in
              booking group trips.
            </Paragraph>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> Travel agents at their best will remove the burden of research and
                planning from the customer and provide individualized travel suggestions.
                Further, the hotel industry stands to benefit since the commission rates
                can be negotiated on a case by case basis.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> Conflicts of interest may arise when the travel agent is secretly
              incentivized by higher paying hotels. In these cases, the traveler may not
              receive the best available deal for their preferences.
              </p>
            </CustomListItem>
          </CustomList>

          {/* 3.2.2 */}
          <CustomList title="Global Distribution System (GDS)"> 
            <Paragraph size='medium' margin='small'>
              Global distribution systems originally began in the airline industry (eAAsy
              Sabre) to provide a central platform for airlines and travel agents to aggregate
              flight data. By 1991, the Hotel Reservation Network (now Hotels.com)
              was founded to extend this idea directly to the customer for hotel bookings using
              a toll-free phone number. Currently, global distribution systems are largely
              outdated and seeking ways to reinvent themselves since online travel agents are
              now able to bypass their networks and work directly with the service providers
              (i.e hotels, airlines, and rental car companies).
            </Paragraph>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> The benefit of a global distribution system lies in it’s network and
              the consequent ability to bundle airline deals with hotel and car rental
              service providers. However, online travel agents (OTAs) are now able
              to provide the same service directly to the traveler which has left global
              distribution systems looking for ways to stay relevant.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> Availability and pricing information can be slow and spotty since
              global distribution systems typically act between service providers and
              travel agents rather than communicating directly with the travelers.
              </p>
            </CustomListItem>
          </CustomList>

          {/* 3.2.3 */}
          <CustomList title="Online Travel Agent (OTA)"> 
            <Paragraph size='medium' margin='small'>
              Online travel agents represent the most dramatic change to the travel industry
              in the last decade. Initially, OTAs tapped directly into the GDS networks to
              find availabilities and sell directly to the interested traveler, however, channel
              management software packages now allow OTAs the option of bypassing the
              GDS and learning of availability information directly from the hotel or other
              service provider. While much of this has truly improved the travelers experience
              only two main parent companies currently exist - Priceline Group and Expedia
              Inc. - each with many subsidiary companies that creates the illusion of competion.
              This duopoly has predictably led to high commission rates and uneven
              legal agreements, the burden of which is shared by the hotel and the traveler in
              the form of lower profit and higher rates.
            </Paragraph>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> Online travel agencies are easy to use and can provide discounts
              when bundling a flight, room, and rental car.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> High commission rates charged by OTAs and various payment reconciliation
                methods add costs to the hotel which ultimately falls, at least
                in part, to the traveler. Further, booking through an OTA complicates the
                resolution of any disputes between the hotel and traveler (i.e. if a traveler
                is unsatisfied with the room and wants a discount they often must go
                through the OTA rather than working directly with hotel management).
                And finally, the sheer size of the two main OTAs allow for uneven and
                inconsistent legal agreements.
              </p>
            </CustomListItem>
          </CustomList>

          {/* 3.2.4 */}
          <CustomList title="Channel Manager"> 
            <Paragraph size='medium' margin='small'>
              Channel management software allows the hotel to automatically update their
              availability and pricing information across their distribution network. This technology
              relies on two-way XML communication to push and pull data between
              the hotel’s property management system and various booking platforms (i.e.
              online travel agents, global distribution system, direct booking through hotel’s
              website) to help prevent over booking. It was the advent of this ability that ultimately
              allowed online travel agencies to bypass the global distribution system’s
              information network and take hold of the market.
            </Paragraph>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> Automates much of the hotel’s inventory planning and centralizes
              access to various distribution channels.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> Most channel management companies operate on the software as
              a service (SaaS) model which further increases the hotel’s operating cost
              and adds complexity into the hotel ecosystem.
              </p>
            </CustomListItem>
          </CustomList>

          {/* 3.2.5 */}
          <CustomList title="Property Management System (PMS)"> 
            <Paragraph size='medium' margin='small'>
              The hotel’s property management system (PMS) refers to any piece of software
              designed to help manage the daily requirements of running a hotel. At it’s most
              basic, a PMS will include functions to manage guest arrivals and departures and
              then generate the necessary reports for auditing. More advanced systems can
              include a housekeeping module, payment processor, and revenue management
              tools.
            </Paragraph>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> A good property management system can make the life of a hotelier
              much easier by automating and centralizing many of the daily operations.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              border="1px solid blue"
              borderRad
              classNames="who__card-font"
            >
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> Lack of customization and complicated interfaces makes it difficult
              to train new workers.
              </p>
            </CustomListItem>
          </CustomList>

          {/* 3.3 */}
          <CustomList title="Proposed Ecosystem"> 
            <Paragraph size='medium' margin='small'>
              Since BookLocal will act as a property management system, channel manager,
              and payment processor for the hotel and provide metasearch capabilities for
              the traveler, much of the current ecosystem can be bypassed. As such, figure 2
              represents our vision after full implementation.
            </Paragraph>
            <Image 
              size='large' 
              src={ecosystem2}
              caption='Figure 2: BookLocal Ecosystem' 
            />
            <Paragraph size='medium' margin='small'>
              Note that BookLocal seeks to be fully compatible with current online travel
              agencies in order to provide seamless integration for early-adopting hotels and
              late-adopting travelers.
            </Paragraph>
          </CustomList>
        </Section>
      </div>
    );
  }

}

export default Who;
