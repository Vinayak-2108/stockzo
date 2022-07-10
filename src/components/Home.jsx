import React, { Component } from "react";
import homeimg from "../images/home-logo.png";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="text">
          <h1 className="hero-text">Market Forecast</h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn black-btn">Get Started</button>
          
        </div>
        <div className="image">
          <figure>
            <img src={homeimg} className="home-image" alt="home logo" />
          </figure>
        </div>
      </div>
      
    </>
  );
};

export default Home;
