import React, { useState, useEffect } from "react";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import logopic from "../../images/logo.png";
import twit from "../../images/twitter.png";
import insta from "../../images/insta.png";
import fb from "../../images/fb.png";

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand" to="/">
        <figure>
          <img src={logopic} alt="logo" />
        </figure>
      </NavLink>

      {(toggleNav || screenWidth > 991) && (
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
      )}

      <button onClick={toggleNav} className="nav-button">
        <i className="fa fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar2;
