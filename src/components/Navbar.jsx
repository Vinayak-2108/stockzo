import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logopic from "../images/logo.png";
import twit from "../images/twitter.png";
import insta from "../images/insta.png";
import fb from "../images/fb.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand" to="/">
          <figure>
            <img src={logopic} alt="logo" />
          </figure>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item social">
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
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
