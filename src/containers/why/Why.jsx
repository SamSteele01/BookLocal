import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';
import Problems from './Problems';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';

class Why extends Component {

  render() {
    return (
      <div>
        <Section>
          Why
        </Section>
        <Label>
          To understand the motivation for BookLocal we identify a few key issues with
          the current hotel reservation model and propose solutions.
        </Label>
        <Problems>
          <CustomList title="High commission payments.">
            <CustomListItem text="Online travel agents (OTA) receive 15-25% commission per room."/>
          </CustomList>
        </Problems>
        {/* <Solutions/> */}
      </div>
    );
  }

}

export default Why;
