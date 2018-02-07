import React, { Component } from 'react';
import Box from 'grommet/components/Box';

class CustomList extends Component {

  render() {
    return (
      <div>
        <Box
          direction='column'
          justify='start'
          align='center'
          wrap={true}
          pad='medium'
          margin='small'
          colorIndex='light-2'>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </Box>
      </div>
    );
  }

}

export default CustomList;
