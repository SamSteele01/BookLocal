import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';

class CustomListItem extends Component {

  render() {

    const {
      height,
      animation,
      color,
      bgColor,
      border,
      borderRad,
      classNames
    } = this.props;

    var divStyle = {
      color: color, 
      backgroundColor: bgColor,
      border: border,
      borderRadius: borderRad
    };

    return (
      <div>
        <Animate enter={{"animation": animation, "duration": 1000, "delay": 0}}
            keep={true} visible="scroll">
          <div style={divStyle} className={classNames}>
            <Box
              direction='row'
              justify='between'
              align='center'
              alignSelf='stretch'
              // full='horizontal'
              flex='grow'
              size={{height: height, width: 'full'}}
              responsive={false}
              wrap={false}
              pad='large'
              // margin='small'
              >
              {this.props.children}
            </Box>
          </div>
        </Animate>
      </div>
    );
  }
}

CustomListItem.propTypes = {
  // children: PropTypes.element,
  // icon: PropTypes.string.isRequired,
  height: PropTypes.string,
  animation: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  classNames: PropTypes.string
};

CustomListItem.defaultProps = {
  height: "xsmall",
  animation: "slide-right",
  color: "#464749", //font-gray
  bgColor: "white"
};


export default CustomListItem;
