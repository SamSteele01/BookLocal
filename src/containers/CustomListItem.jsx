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
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            {this.props.icon}
            <p>{this.props.text}</p>
          </Box>
        </Animate>
      </div>
    );
  }

}

export default CustomListItem;
