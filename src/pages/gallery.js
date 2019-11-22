import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-wrapper">
        <Header />
        Gallery Page
        <Footer />
      </div>
    );
  }
}