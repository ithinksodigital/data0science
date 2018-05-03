import React from 'react';
import './Footer.sass';
class Footer extends React.Component {
  render() {
    return (
        <div className="launch-details__footer">
            <div className="footer__title">
                <h6>FOLLOW SPACEX</h6>
                <div className="footer__links">
                  <a href="#">TWITTER</a>
                  <a href="#">YOUTUBE</a>
                  <a href="#">FLICKR</a>
                  <a href="#">INSTAGRAM</a>
                </div>
            </div>
            <div className="footer__copy">
                <h6>2018 SPACE EXPLORATION TECHNOLOGIES CORP.</h6>
            </div>
      </div>
    );
  }
}

export default Footer;
