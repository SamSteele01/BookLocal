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
        <Paragraph align='center' 
        // className="white"
        >
          BookLocal will design a platform that incorporates the best features of the current system while omitting middlemen.
        </Paragraph>
        {this.props.children}
      </div>
    );
  }

}

export default Solutions;
