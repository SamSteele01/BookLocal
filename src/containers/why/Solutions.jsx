import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';

class Solutions extends Component {

  render() {
    return (
      <div 
      className="solutions"
      >
        {/* 2.2 */}
        <Heading align='center' 
 	 	 	 	 	 	 margin='large'
          tag='h2'>
          Solutions
        </Heading>
        <p className='paragraph'>
          BookLocal will design a platform that incorporates the best features of the current system while omitting middlemen.
        </p>
        {this.props.children}
      </div>
    );
  }

}

export default Solutions;
