import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Columns from 'grommet/components/Columns';

// TODO: add window listener to feed media break 
// padding, color, bgcolor as props
class CustomList extends Component {

  render() {

    const {
      pad,
      title,
      maxCount,
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
      <div style={divStyle} className={classNames}>
        <Box
          direction='column'
          justify='start'
          align='stretch'
          alignContent='stretch'
          wrap={true}
          responsive={true}
          pad={pad}
          // margin='small'
        >
        {this.props.title ?
          <Heading 
            align='center'
            margin='medium'
            tag='h4'>
            {this.props.title}
          </Heading> :
          null }

          <Columns 
            responsive={false}
            masonry={false}
            justify='center'
            maxCount={maxCount}
            // size='small'
          >
            {this.props.children}
          </Columns>
        </Box>
      </div>
    );
  }

}

CustomList.propTypes = {
  // children: PropTypes.element,
  // icon: PropTypes.string.isRequired,
  pad: PropTypes.string,
  title: PropTypes.string,
  maxCount: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  classNames: PropTypes.string
};

CustomList.defaultProps = {
  pad: "none",
  color: "#464749", //font-gray
  bgColor: "white"
};

export default CustomList;
