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
        <Section>
          <Heading align='center'
            tag='h2'>
            Who
          </Heading>
          <Paragraph size='medium' margin='medium'>
            The current ecosystem has too many players trying to earn a share of the fi-
            nal room price. Figure 1 shows the network of relationships, each of which is
            explained below.
          </Paragraph>
          <CustomList title="Ecosystem">
            <Paragraph size='medium' margin='medium'>
              Below is a visual representation of the various paths through which a traveler
              can book a room. The red arrows indicate the most used reservation path.
            </Paragraph>
          </CustomList>
          <Image size='large' src={ecosystem}
            caption='Figure 1: Current Ecosystem' />
        </Section>
      </div>
    );
  }

}

export default Who;
