import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import loginimg from "../images/login-img.png";
const Login = () => {
  return (
    <>
      <div className="login-main">
        <div className="login-text">
          <h1 className="hero-text">
            <div>Hello!</div>
            <div>Good Morning</div>
          </h1>
          <h2>Login to your account</h2>
          <form className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="text" id="username" autoComplete="off" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
            </div>
          </form>
          <a href="#" className="forgot-pass-link">Forgot password?</a>
          <button className="btn login-btn">Login</button>
          <NavLink to="/login" className="create-acc-link">
            Create an account
          </NavLink>
        </div>
        <div className="image ">
          <figure className="login-image">
            <img src={loginimg} className="login-img" alt="home logo" />
          </figure>
          
        </div>
      </div>
    </>
  );
};

export default Login;
