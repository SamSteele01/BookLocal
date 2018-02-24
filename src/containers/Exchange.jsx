import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import "../styles/Exchange.scss";
import Map from "../images/map.png";


export default class Exchange extends Component {
  render(){
    return(
      <div className="exchange-building--wrapper">
        <a href="https://www.google.com/maps/place/Exchange+Building+Apartments/@35.14521,-90.0602567,15z/data=!4m5!3m4!1s0x87d57e9476e47385:0x1171e014fa76a984!8m2!3d35.14521!4d-90.051502" target="_blank" rel="noopener noreferrer"><img src={Map} alt="Map of Building" className="exchange-building--map"/></a>
        <div className="exchange-building--content">
        <Heading align='center' margin='medium' tag='h2' className="heading">
            The Exchange Building
        </Heading>

          <h3>The Exchange Building in Memphis, Tennessee will host the first version of
          BookLocal as it’s own proprietary property management system. </h3>
          <h4><a href="http://www.exchange-building.com/" target="_blank" rel="noopener noreferrer">Visit the Exchange Building's Website</a></h4>
      </div>
    </div>
    )
  }
}
