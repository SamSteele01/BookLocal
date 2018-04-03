import React, { Component } from 'react';
import HeadingDropDown from 'components/HeadingDropDown';
import Problems from './Problems';
import Solutions from './Solutions';

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
