import React, { Component } from 'react';

class Logo extends Component {

  render() {
    return (
      <div>
        <img
          className="Logo" src="http://booklocal.in/wp-content/uploads/2017/07/logo5.png" 
          alt=""
          width="320"
          height="132" srcSet="http://booklocal.in/wp-content/uploads/2017/07/logo5.png 320w, http://booklocal.in/wp-content/uploads/2017/07/logo5-768x316.png 768w"
          sizes="(max-width: 320px) 100vw, 320px"
        />
      </div>
    );
  }

}

export default Logo;
