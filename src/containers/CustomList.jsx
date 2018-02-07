import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

class CustomList extends Component {

  render() {
    return (
      <div>
        <Box
          direction='column'
          justify='start'
          align='stretch'
          wrap={true}
          responsive={true}
          pad='medium'
          margin='small'
          colorIndex={this.props.colorIndex}>
          <Heading align='center'
            tag='h4'>
            {this.props.title}
          </Heading>
          {this.props.children}
        </Box>
      </div>
    );
  }

}

export default CustomList;
