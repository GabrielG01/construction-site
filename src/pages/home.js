import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

import photo_one from "../images/stock1.jpg";
import photo_two from "../images/stock2.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <div className="home-image-wrapper-one">
          <h1>Company Name</h1>
        </div>
        <div className="home-content-wrapper">
          <div className="home-content-left">
            <h1>About us</h1>
            <p>
              Woodwork, painting, electrical, plumbing, and more. My services
              might be varied, but they all come with the same promise of
              quality, dedication, and durability. Licensed and insured, I’m an
              experienced contractor with knowledge passed down from
              generations. I can offer a 1-year guarantee for all my services,
              along with free estimates.
            </p>
          </div>

          <div className="home-content-right">
            <h1>Schedule Appointment</h1>
            <p>
              All estimates are free and flexible to materials and scheduling
            </p>
            <NavLink className="footer-button" exact to="/contact">
              Start Now
            </NavLink>
          </div>
        </div>
        <div className="home-image-wrapper-two"></div>
        <div className="home-content-wrapper">
          <div className="home-content-left">
            <h1>Our promise</h1>
            <p>
              We’ll only work with the best materials available and provide a 1
              year guarantee on all labor. We never compromise quality for time
              and give my clients realistic schedules that accommodate their
              lives. We strive for honest customer service, so contracts are
              only paid in full when the finished work is to your complete
              satisfaction.
            </p>
          </div>
          <div className="home-content-right">
            <h1>See our handy work</h1>
            <NavLink className="footer-button" exact to="/gallery">
              Project Gallery
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
