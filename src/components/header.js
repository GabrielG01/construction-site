import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header_home">
          <NavLink className="header_home" exact to="/">
            Home
          </NavLink>
        </div>

        <div className="header-nav-link-wrapper">
          <NavLink className="header_services" exact to="/services">
            Services
          </NavLink>
          <NavLink className="header_gallery" exact to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="header_contact" exact to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    );
  }
}
