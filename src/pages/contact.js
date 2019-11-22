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
        Contact Page
        <button onClick={this.handleEmail}>Email Test</button>
        <Footer />
      </div>
    );
  }
}
