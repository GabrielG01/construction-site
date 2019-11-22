import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import photo_one from "../images/stock1.jpg";
import photo_two from "../images/stock2.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        <div className="home-image-wrapper">
          <h1>Company Name</h1>
        </div>
        <div className="home-content-wrapper">
          <div className="home-content-left">
            <h3>Services</h3>
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
        </div>
        <Footer />
      </div>
    );
  }
}
