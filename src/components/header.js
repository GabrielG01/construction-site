import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-content">
          <div className="header-home-button">
            <NavLink className="header-home" exact to="/">
              Home
            </NavLink>
          </div>

          <div className="header-nav-link-wrapper">
            <NavLink className="header-link" exact to="/">
              <h3>Home</h3>
            </NavLink>
            <NavLink className="header-link" exact to="/services">
              <h3>Services</h3>
            </NavLink>
            <NavLink className="header-link" exact to="/gallery">
              <h3>Gallery</h3>
            </NavLink>
            <NavLink className="header-link" exact to="/contact">
              <h3>Contact</h3>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
