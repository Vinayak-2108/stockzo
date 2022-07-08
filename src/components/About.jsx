import React, { Component } from "react";
import aboutimg from "../images/about-img.png";
import teampic from "../images/team.png";
import discCard from "../images/discount-card.png";
const About = () => {
  return (
    <>
      <div className="full-page">
        <div className="image">
          <figure>
            <img src={aboutimg} alt="about logo" />
          </figure>
        </div>
        <div className="about-text">
          <h3>What is</h3>
          <h1 className="hero-text">Stockzo?</h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="btns">
            <button className="btn black-btn">Stockzo Mission</button>
            <button className="btn inverted-btn">The platform in detail</button>
          </div>
        </div>
      </div>
      <div className="full-page">
        <div className="about-text">
          <h3>Services</h3>
          <h1 className="hero-text">Check Out Our Specialized Services</h1>
        </div>
        <div className="card blk">
          <div className="card-img">
            <img src={discCard} alt="Discount Broking" />
          </div>
          <div className="card-title">Discount Broking</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <button className="btn card-btn">Learn More</button>
        </div>
        <div className="card off-wht">
          <div className="card-img">
            <img src={discCard} alt="Discount Broking" />
          </div>
          <div className="card-title ">Portfolio Match</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <button className="btn card-btn">Learn More</button>
        </div>
      </div>
      <div className="team-page">
        <h1 className="team-title">Our Team</h1>
        <div className="team">
          {/* TEAM INFO */}
          <div className="team-info">
            <div className="info-img">
              <img src={teampic} className="profile-img" alt="team" />
            </div>
            <div className="info-text">Lorem ipsum dolor </div>
            <div className="info-text-name">Full Name</div>
            <div className="info-text">Lorem ipsum dolor </div>
          </div>

          <div className="team-info">
            <div className="info-img">
              <img src={teampic} className="profile-img" alt="team" />
            </div>
            <div className="info-text">Lorem ipsum dolor </div>
            <div className="info-text-name">Full Name</div>
            <div className="info-text">Lorem ipsum dolor </div>
          </div>

          <div className="team-info">
            <div className="info-img">
              <img src={teampic} className="profile-img" alt="team" />
            </div>
            <div className="info-text">Lorem ipsum dolor </div>
            <div className="info-text-name">Full Name</div>
            <div className="info-text">Lorem ipsum dolor </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
