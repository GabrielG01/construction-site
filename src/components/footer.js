import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <h1>Schedule Appointment</h1>
        <NavLink className="footer-button" exact to="/contact">
          Start Now
        </NavLink>
      </div>
    );
  }
}
