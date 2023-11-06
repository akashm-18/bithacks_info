import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./bitlogo.png" alt="" width={120} />
          <span className="secondaryText">
            Various Events Shape your overall personality and interpersonal
            skills.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Bannari Amman Institute of Technology
          </span>
          <div className="flexCenter f-menu">
            <span>Events</span>
            <span>Partners</span>
            <span>Contact</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
