import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

// TODO: add window listener to feed media break 
// padding, color, bgcolor as props
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
          // margin='small'
          colorIndex={this.props.colorIndex}>
          <Heading 
            align='start'
            margin='medium'
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
