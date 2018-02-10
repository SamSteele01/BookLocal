import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import Image from 'grommet/components/Image';
import ecosystem from '../../images/hotel-current-ecosystem.png';

class Who extends Component {

  render() {
    return (
      <div>
        <Section margin={{top: 'large'}}> 

          {/* 3 */}
          <Heading align='center'
            tag='h2'>
            Who
          </Heading>
          <Paragraph size='medium' margin='medium'>
            The current ecosystem has too many players trying to earn a share of the fi-
            nal room price. Figure 1 shows the network of relationships, each of which is
            explained below.
          </Paragraph>

          {/* 3.1 */}
          <CustomList title="Ecosystem"> 
            <Paragraph size='medium' margin='medium'>
              Below is a visual representation of the various paths through which a traveler
              can book a room. The red arrows indicate the most used reservation path.
            </Paragraph>
          </CustomList>
          <Image size='large' src={ecosystem}
            caption='Figure 1: Current Ecosystem' />

          {/* 3.2 */}
          <Heading align='center'
            tag='h3'> 
            Players
          </Heading>
          <Paragraph size='medium' margin='medium'>
            We describe the main players in the ecosystem by including a brief history and
            discussing the value they add and cost they subtract from the industry.
          </Paragraph>

          {/* 3.2.1 */}
          <CustomList title="Travel Agent"> 
            <Paragraph>
              Travel agents appeared first as an intermediary between travelers and hotels
              in order to facilitate trip planning. While the internet has left brick and mortar
              travel agencies largely obsolete, they do still exist and are often helpful in
              booking group trips.
            </Paragraph>
            <CustomListItem>
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> Travel agents at their best will remove the burden of research and
                planning from the customer and provide individualized travel suggestions.
                Further, the hotel industry stands to benefit since the commission rates
                can be negotiated on a case by case basis.
              </div>
            </CustomListItem>
            <CustomListItem>
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> Conflicts of interest may arise when the travel agent is secretly
              incentivized by higher paying hotels. In these cases, the traveler may not
              receive the best available deal for their preferences.
              </p>
            </CustomListItem>
          </CustomList>

          {/* 3.2.2 */}
          <CustomList title="Global Distribution System (GDS)"> 
            <Paragraph>
              Global distribution systems originally began in the airline industry (eAAsy
              Sabre) to provide a central platform for airlines and travel agents to aggregate
              flight data. By 1991, the Hotel Reservation Network (now Hotels.com)
              was founded to extend this idea directly to the customer for hotel bookings using
              a toll-free phone number. Currently, global distribution systems are largely
              outdated and seeking ways to reinvent themselves since online travel agents are
              now able to bypass their networks and work directly with the service providers
              (i.e hotels, airlines, and rental car companies).
            </Paragraph>
            <CustomListItem>
              <div>&#8226;</div>
              <div><i className="underline">Value:</i> The benefit of a global distribution system lies in it’s network and
              the consequent ability to bundle airline deals with hotel and car rental
              service providers. However, online travel agents (OTAs) are now able
              to provide the same service directly to the traveler which has left global
              distribution systems looking for ways to stay relevant.
              </div>
            </CustomListItem>
            <CustomListItem>
              <div>&#8226;</div>
              <p><i className="underline">Cost:</i> Availability and pricing information can be slow and spotty since
              global distribution systems typically act between service providers and
              travel agents rather than communicating directly with the travelers.
              </p>
            </CustomListItem>
          </CustomList>
        </Section>
      </div>
    );
  }

}

export default Who;
