import React, { Component } from "react";
import aboutimg from "../images/about-img.png";
import Card from "./Card";
import teampic from "../images/team.png";
import discCard from "../images/discount-card.png";
import portmatch from "../images/portmatch-card.png";
import Team from "./Team";
const About = () => {
  return (
    <>
      <div className="full-page">
        <div className="image">
          <figure>
            <img src={aboutimg} className="about-image" alt="about logo" />
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

        <Card
          className="card blk"
          img={discCard}
          title="Discount Broking"
          body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        />
        <Card
          className="card off-wht"
          img={portmatch}
          title="Portfolio Match"
          body=" Lorem ipsum dolor sit a~met, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        />
      </div>
      <div className="team-page">
        <h1 className="team-title">Our Team</h1>
        <div className="team">
          {/* TEAM INFO */}
          <Team img={teampic} name="Full Name" />
          <Team img={teampic} name="Full Name" />
          <Team img={teampic} name="Full Name" />
        </div>
      </div>
    </>
  );
};

export default About;

{/* <li className="nav-item social">
              <figure>
                <img src={twit} alt="twitter" />
              </figure>
            </li>
            <li className="nav-item social">
              <figure>
                <img src={insta} alt="instagram" />
              </figure>
            </li>
            <li className="nav-item social">
              <figure>
                <img src={fb} alt="facebook" />
              </figure>
            </li> */}