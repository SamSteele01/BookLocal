import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import HeadingDropDown from 'components/HeadingDropDown';
import Box from 'grommet/components/Box';
import Problems from './Problems';
import Solutions from './Solutions';
import CustomList from 'components/CustomList';
import CustomListItem from 'components/CustomListItem';
import colors from 'styles/colors';

class Why extends Component {

  render() {
    return (
      // <div className="why section--wrapper">
      <HeadingDropDown className="why" headingName="Why">
          {/* <div className='heading'>Why</div> */}
          <p className="paragraph-white">
            To understand the motivation for BookLocal we identify a few key issues with
            the current hotel reservation model and propose solutions.
          </p>
          <Problems/>
          <Solutions/>
      {/* </div> */}
      </HeadingDropDown>
    );
  }

}

export default Why;
