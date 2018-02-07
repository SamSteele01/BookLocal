import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Label from 'grommet/components/Label';

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
      </div>
    );
  }

}

export default Why;
