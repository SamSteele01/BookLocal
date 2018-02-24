import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';

class Solutions extends Component {

  render() {
    return (
      <div
      className="solutions section--wrapper"
      >
        {/* 2.2 */}
        <Heading align='center'
          tag='h2'
          >
          Solutions
        </Heading>
        <p className='paragraph-gray'>
          BookLocal will design a platform that incorporates the best features of the current system while omitting middlemen.
        </p>
        {this.props.children}
      </div>
    );
  }

}

export default Solutions;
