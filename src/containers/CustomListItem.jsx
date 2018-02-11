import React, { Component } from 'react';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';

class CustomListItem extends Component {

  render() {
    return (
      <div>
        <Animate enter={{"animation": "slide-right", "duration": 1000, "delay": 0}}
            keep={true} visible="scroll">
          <Box
            direction='row'
            justify='between'
            alignSelf='stretch'
            // full='horizontal'
            flex='grow'
            // size='medium'
            responsive={false}
            wrap={false}
            pad='small'
            margin='small'
            colorIndex={this.props.colorIndex}>
            {this.props.children}
          </Box>
        </Animate>
      </div>
    );
  }
}



export default CustomListItem;
