import React, { Component } from "react";
import Header from "../components/header";

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header />
        Home Page
      </div>
    );
  }
}
