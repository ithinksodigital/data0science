import React from 'react';
import ArrowPointer from '../assets/arrow_pointer.svg';
import Logo from '../assets/space_x_logo_bw_centered.svg';
import './Navbar.sass';

class Navbar extends React.Component {
  render() {
    return (
        <div className="launch-details__navbar" onClick={this.props.onBackClick}>
          <div className="navbar__rev">
            <ArrowPointer/>
            <div className="back-sign"></div>
            <h5>GO BACK</h5>
          </div>
          <div className="navbar__logo">
            <Logo width="256px"/>
          </div>
          <div></div>
        </div>
    );
  }
}

export default Navbar;
