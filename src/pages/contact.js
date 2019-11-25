import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import photo from "../images/stock3.jpg";

export default class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact">
        <Header />
        <div className="contact-wrapper">
          <div className="contact-content-wrapper">
            <div className="contact-header-wrapper">
              <h1>Contact Us</h1>
            </div>

            <div className="contact-top">
              <div className="contact-address-wrapper">
                <p>Peter Sweeney</p>
                <p>777 Broadway Ave.</p>
                <p>New York, NY 00000</p>
              </div>
              <div className="contact-email-wrapper">
                <p>template.placeholder@gmail.com</p>
              </div>
            </div>
            <div className="contact-bottom">
              <div className="contact-phone-wrapper">
                <p>212 555 0110</p>
              </div>
            </div>
          </div>
          <div className="contact-image-wrapper">
            <image src={photo} alt="contact-photo" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
