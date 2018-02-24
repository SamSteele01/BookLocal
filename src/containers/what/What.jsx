import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import CustomList from '../CustomList';
import CustomListItem from '../CustomListItem';
import colors from '../../styles/colors';

class What extends Component {

  render() {
    return (
      <div className='what section--wrapper'>
        <Section
          pad='none'
          align='stretch'
          alignContent='center'
          // appCentered='true'
        >

          {/* 1 */}
          <div className='heading'>What Do we Do?</div>
          <p className='paragraph-white'>
            The vision for BookLocal is to connect travelers directly to their hotel of choice
            by creating the first two way property management system accessible as both
            a traveler and a hotel administrator. Simply put, BookLocal is designed to
            remove middlemen from the hotel ecosystem and serve as the single point of
            contact. Successful implementation allows for three key benefits: simplified
            user experiences; lower room prices for the traveler; and higher profits for the
            hotel.
          </p>
          <p className='paragraph-white'>
            At its heart, BookLocal will operate as a series of smart contracts stored on
            the Ethereum blockchain. To interact with the application, special interfaces
            for both hotel workers and travelers will be designed to provide full service
            functionality and replace inefficiencies in the current ecosystem.
          </p>

            <h2>To the traveler, BookLocal will provide the following features:</h2>


          <CustomList
            bgColor={colors.gray}

          >
            <CustomListItem
              // height="auto"
              // animation="slide-left"
              color="$black"
              // bgColor="orange"
              //border={`1px solid ${colors.blue1}`}
              //borderRad="5px"
              classNames="what__card-font">
              {/* <SearchIcon/>   <Image
                  size='thumb'
                  src={Search}
                /> */}

              <h3><i class="fas fa-search"></i> Search</h3>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
            //  border="1px solid blue"
            //  borderRad
              classNames="what__card-font">
              {/* <CompareIcon/>   <Image
                  size='thumb'
                  src={Compare}
                /> */}

              <h3><i class="fas fa-exchange-alt"></i> Compare</h3>
            </CustomListItem>
            <CustomListItem
              //height="auto"
              animation="slide-left"
              // color="$black"
              // bgColor="orange"
            //  border="1px solid blue"
              //borderRad
              classNames="what__card-font"
            >
              {/* <CheckboxSelectedIcon/>   <Image
                  size='thumb'
                  src={Reserve}
                />*/}

              <h3><i class="far fa-address-book"></i> Book</h3>
            </CustomListItem>
            <CustomListItem
              //height="xsmall"
              animation="slide-left"
              // color="$black"
              // bgColor="orange"
            //  border="1px solid blue"
              //borderRad
              classNames="what__card-font">
              {/* <MoneyIcon/>     <Image
                    size='thumb'
                    src={ShoppingCart}
                  /> */}

              <h3><i class="fas fa-shopping-cart"></i> Purchase</h3>
            </CustomListItem>
          </CustomList>

            <h2>To the hotel, BookLocal will provide modules for:</h2>

          {/* add icons */}
          <CustomList
            bgColor={colors.gray}
          >
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              //border="1px solid blue"
              //borderRad
              classNames="what__card-font">
              {/* <Image
                size='thumb'
                src={Reception}
              />*/}
              <h3><i class="fas fa-users"></i> Guest Management</h3>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              //border="1px solid blue"
            //  borderRad
              classNames="what__card-font"
            >
          {    /*<Image
                size='thumb'
                src={Housekeeping}
              />*/}
              <h3><i class="fas fa-home"></i> Housekeeping and Maintenance</h3>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              // animation="slide-left"
              // color="$black"
              // bgColor="orange"
              // border="1px solid blue"
              // borderRad
              classNames="what__card-font"
            >
              {/*<Image
                size='thumb'
                src={Revenue}
              />*/}
              <h3><i class="fas fa-money-bill-alt"></i> Revenue Management</h3>
            </CustomListItem>
            <CustomListItem
              // height="xsmall"
              animation="slide-left"
              // color="$black"
              // bgColor="orange"
              //border="1px solid blue"
              // borderRad
              classNames="what__card-font"
            >
              {/*<Image
                size='thumb'
                src={Sale}
              />*/}
               <h3><i class="far fa-credit-card"></i> Payment Processing and Point of Sale</h3>
            </CustomListItem>
            <CustomListItem
                // height="xsmall"
                animation="slide-left"
                // color="$black"
                // bgColor="orange"
                //border="1px solid blue"
                //borderRad
                classNames="what__card-font"
              >
              {/*<Image
                size='thumb'
                src={Report}
              />*/}
              <h3><i class="fas fa-chart-line"></i> Report Generation</h3>
            </CustomListItem>
            <CustomListItem

              animation="slide-left"
              // color="$black"
              // bgColor="orange"
              //border="1px solid blue"
              //borderRad
              classNames="what__card-font"
            >
            {  /*<Image
                size='thumb'
                src={Channel}
              />*/}
              <h3><i class="fas fa-arrows-alt"></i> Channel Management</h3>
            </CustomListItem>
          </CustomList>
        </Section>
      </div>
    );
  }

}

export default What;
