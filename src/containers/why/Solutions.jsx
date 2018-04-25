import React, { Component } from 'react';
// import Heading from 'grommet/components/Heading';
import HeadingDropDown from 'components/HeadingDropDown';
import Box from 'grommet/components/Box';
import CustomList from 'components/CustomList';
import CustomListItem from 'components/CustomListItem';
import colors from 'const/colors';

class Solutions extends Component {

  render() {
    return (
      <HeadingDropDown className="solutions" subHeadingName="Solutions">
        {/* 2.2 */}
        <p className='paragraph-gray'>
          BookLocal will design a platform that incorporates the best features of the current system while omitting middlemen.
        </p>
        <CustomList
              title="Brand new revenue structure."
              color={colors.fontGray}
              // bgColor={colors.blue3}
              >
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.headerGray}
                classNames="who__card-font"
              >
                Designed to lower the room prices for travelers and increase hotel profits.
              </CustomListItem>
            </CustomList>
            <CustomList
              title="Open sourced contracts."
              color={colors.fontGray}
              // bgColor={colors.blue3}
            >
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.blue2}
                // border={`2px solid ${colors.orange3}`}
                borderRad
                classNames="who__card-font"
              >
                All contracts will be open sourced and publicly scrutinized to provide fair
                and consistent terms.
              </CustomListItem>
            </CustomList>
            <CustomList
              title="Holistic design."
              color={colors.fontGray}
              // bgColor={colors.blue3}
              >
              <CustomListItem
                // height="xsmall"
                // animation="slide-left"
                color="white"
                bgColor={colors.headerGray}
                classNames="who__card-font"
              >
                This is the first travel application designed to accomodate the entire booking
                process.
              </CustomListItem>
              <CustomListItem
                // height="xsmall"
                animation="slide-left"
                color="white"
                bgColor={colors.gray}
                classNames="who__card-font"
              >
                Integrating features into a single system will put the guest and hotel in
                direct contact by removing unnecessary middlemen.
              </CustomListItem>
            </CustomList>
      </HeadingDropDown>
    );
  }

}

export default Solutions;
