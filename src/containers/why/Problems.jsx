import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';

class Problems extends Component {

  render() {
    return (
      <div className="problems">
        {/* 2.1 */}
        <Heading

          tag='h2'
        >
          Problems
        </Heading>
        <p className='paragraph-white'>
          The hotel booking industry is fragmented with no fewer than five different
          groups working for commission between travelers and hotels. Problems include:
        </p>
        {this.props.children}
      </div>
    );
  }

}

export default Problems;
