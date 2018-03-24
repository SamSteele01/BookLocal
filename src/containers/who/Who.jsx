import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import ecosystem from '../../images/hotel-current-ecosystem.png';
import ecosystem2 from '../../images/booklocal-ecosystem.png';
import colors from '../../styles/colors';

class Who extends Component {

  render() {
    return (
      <div className="who section--wrapper">
        <Section
          pad='none'
          align='stretch'
          alignContent='center'
          // appCentered='true'
        >

          {/* 3 */}
          <div className='heading'>Who</div>
          <p className='paragraph'>
            The current ecosystem has too many players trying to earn a share of the final room price. Figure 1 shows the network of relationships, each of which is explained below.
          </p>

          {/* 3.1 */}
          <CustomList title="Ecosystem">
            <p className='paragraph'>
              Below is a visual representation of the various paths through which a traveler
              can book a room. The red arrows indicate the most used reservation path.
            </p>
          </CustomList>

          <div className='image-container'>
              <img
                  src={ecosystem}
                  className='image'
                  alt="ecosystem"
              />
              <span>Figure 1: Current Ecosystem</span>
          </div>

          {/* 3.2 */}
          <Heading align='center'
 	 	 	 	 	 	 margin='medium'
            tag='h3'>
            Players
          </Heading>
          <p className='paragraph'>
            We describe the main players in the ecosystem by including a brief history and
            discussing the value they add and cost they subtract from the industry.
          </p>

          {/* 3.2.1 */}
          <Heading
            align='center'
            margin='medium'
            tag='h4'>
            Travel Agent
          </Heading>
          <p className='paragraph'>
            Travel agents appeared first as an intermediary between travelers and hotels
            in order to facilitate trip planning. While the internet has left brick and mortar
            travel agencies largely obsolete, they do still exist and are often helpful in
            booking group trips.
          </p>
          <CustomList>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              color="white"
                bgColor={colors.blue2}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Value:</i> Travel agents at their best will remove the burden of research and
                planning from the customer and provide individualized travel suggestions.
                Further, the hotel industry stands to benefit since the commission rates
                can be negotiated on a case by case basis.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              animation="slide-left"
              color="white"
              bgColor={colors.gray}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Cost:</i> Conflicts of interest may arise when the travel agent is secretly
              incentivized by higher paying hotels. In these cases, the traveler may not
              receive the best available deal for their preferences.
              </div>
            </CustomListItem>
          </CustomList>

          {/* 3.2.2 */}
          <Heading
            align='center'
            margin='medium'
            tag='h4'>
            Global Distribution System (GDS)
          </Heading>
          <p className='paragraph'>
            Global distribution systems originally began in the airline industry (eAAsy
            Sabre) to provide a central platform for airlines and travel agents to aggregate
            flight data. By 1991, the Hotel Reservation Network (now Hotels.com)
            was founded to extend this idea directly to the customer for hotel bookings using
            a toll-free phone number. Currently, global distribution systems are largely
            outdated and seeking ways to reinvent themselves since online travel agents are
            now able to bypass their networks and work directly with the service providers
            (i.e hotels, airlines, and rental car companies).
          </p>
          <CustomList >
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              color="white"
                bgColor={colors.blue2}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Value:</i> The benefit of a global distribution system lies in it’s network and
              the consequent ability to bundle airline deals with hotel and car rental
              service providers. However, online travel agents (OTAs) are now able
              to provide the same service directly to the traveler which has left global
              distribution systems looking for ways to stay relevant.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              animation="slide-left"
              color="white"
                bgColor={colors.gray}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Cost:</i> Availability and pricing information can be slow and spotty since
              global distribution systems typically act between service providers and
              travel agents rather than communicating directly with the travelers.
              </div>
            </CustomListItem>
          </CustomList>

          {/* 3.2.3 */}
          <Heading
            align='center'
            margin='medium'
            tag='h4'>
            Online Travel Agent (OTA)
          </Heading>
          <p className='paragraph'>
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
          </p>
          <CustomList >
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              color="white"
                bgColor={colors.blue2}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Value:</i> Online travel agencies are easy to use and can provide discounts
              when bundling a flight, room, and rental car.
              </div>
            </CustomListItem>
            <CustomListItem
              height="small"
              animation="slide-left"
              color="white"
                bgColor={colors.gray}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Cost:</i> High commission rates charged by OTAs and various payment reconciliation
                methods add costs to the hotel which ultimately falls, at least
                in part, to the traveler. Further, booking through an OTA complicates the
                resolution of any disputes between the hotel and traveler (i.e. if a traveler
                is unsatisfied with the room and wants a discount they often must go
                through the OTA rather than working directly with hotel management).
                And finally, the sheer size of the two main OTAs allow for uneven and
                inconsistent legal agreements.
              </div>
            </CustomListItem>
          </CustomList>

          {/* 3.2.4 */}
            <Heading
              align='center'
              margin='medium'
              tag='h4'>
              Global Distribution System (GDS)
            </Heading>
            <p className='paragraph'>
              Channel management software allows the hotel to automatically update their
              availability and pricing information across their distribution network. This technology
              relies on two-way XML communication to push and pull data between
              the hotel’s property management system and various booking platforms (i.e.
              online travel agents, global distribution system, direct booking through hotel’s
              website) to help prevent over booking. It was the advent of this ability that ultimately
              allowed online travel agencies to bypass the global distribution system’s
              information network and take hold of the market.
            </p>
          <CustomList title="Channel Manager">
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              color="white"
                bgColor={colors.blue2}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Value:</i> Automates much of the hotel’s inventory planning and centralizes
              access to various distribution channels.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              animation="slide-left"
              color="white"
                bgColor={colors.gray}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Cost:</i> Most channel management companies operate on the software as
              a service (SaaS) model which further increases the hotel’s operating cost
              and adds complexity into the hotel ecosystem.
              </div>
            </CustomListItem>
          </CustomList>

          {/* 3.2.5 */}
          <Heading
            align='center'
            margin='medium'
            tag='h4'>
            Property Management System (PMS)
          </Heading>
          <p className='paragraph'>
            The hotel’s property management system (PMS) refers to any piece of software
            designed to help manage the daily requirements of running a hotel. At it’s most
            basic, a PMS will include functions to manage guest arrivals and departures and
            then generate the necessary reports for auditing. More advanced systems can
            include a housekeeping module, payment processor, and revenue management
            tools.
          </p>
          <CustomList >
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              color="white"
                bgColor={colors.blue2}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Value:</i> A good property management system can make the life of a hotelier
              much easier by automating and centralizing many of the daily operations.
              </div>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              animation="slide-left"
              color="white"
              bgColor={colors.gray}
              // border="1px solid blue"
              borderRad
              classNames="why__card-font"
            >
              <div><i className="underline">Cost:</i> Lack of customization and complicated interfaces makes it difficult
              to train new workers.
              </div>
            </CustomListItem>
          </CustomList>

          {/* 3.3 */}
          <Heading
            align='center'
            margin='medium'
            tag='h4'>
            Proposed Ecosystem
          </Heading>
          <p className='paragraph'>
            Since BookLocal will act as a property management system, channel manager,
            and payment processor for the hotel and provide metasearch capabilities for
            the traveler, much of the current ecosystem can be bypassed. As such, figure 2
            represents our vision after full implementation.
          </p>

          <div className='image-container'>
              <img
                  src={ecosystem2}
                  className='image'
                  alt="ecosystem"
              />
              <span>Figure 2: BookLocal Ecosystem</span>
          </div>

            <p className='paragraph'>
              Note that BookLocal seeks to be fully compatible with current online travel
              agencies in order to provide seamless integration for early-adopting hotels and
              late-adopting travelers.
            </p>
        </Section>
      </div>
    );
  }

}

export default Who;
