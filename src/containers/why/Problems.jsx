import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';

class Problems extends Component {

  render() {
    return (
      <div>
        {/* 2.1 */}
        <Heading align='center'
          tag='h3'>
          Problems
        </Heading>
        <Paragraph>
          The hotel booking industry is fragmented with no fewer than five different
          groups working for commission between travelers and hotels. Problems include:
        </Paragraph>
        {this.props.children}
      </div>
    );
  }

}

export default Problems;
