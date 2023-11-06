import React from 'react';
import './Companies.css';
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="Text">Our Recuriters</div>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./infosys.png" alt="" />
        <img src="./thoughtworks.png" alt="" />
        <img src="./Cognizant.png" alt="" />
        <img src="./zoho.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
