import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default class Contact extends Component {
  constructor() {
    super();

    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail() {
    window.open("mailto:test@example.com");
  }

  render() {
    return (
      <div className="contact-wrapper">
        <Header />
        <h1>Contact</h1>
        <div className="contact-content-wrapper">
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
        <Footer />
      </div>
    );
  }
}
