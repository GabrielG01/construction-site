import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { directiveLiteral } from "@babel/types";

export default class Services extends Component {
  render() {
    return (
      <div className="services-wrapper">
        <Header />
        <div className="services-content-wrapper">
          <div className="services-top-wrapper">
            <h1>Services</h1>
          </div>
          <div className="services-left-wrapper">
            <div className="services-text-wrapper">
              <h1>Carpentry</h1>
              <p>
                Carpentry is the original Sweeney trade. I install and build
                custom cabinets, bookcases, fireplace mantels and more. Duis
                volutpat accumsan odio volutpat congue. Ut euismod interdum urna
                eu tristique. Maecenas ut arcu purus. Vestibulum sit amet dui ac
                justo varius malesuada.
              </p>
            </div>
            <div className="services-text-wrapper">
              <h1>Crown Molding</h1>
              <p>
                Whether it’s antique or new, traditional or modern, crown
                molding is an art that requires attention to detail. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce viverra
                cursus quam eu eleifend. Duis volutpat accumsan odio volutpat
                congue.
              </p>
            </div>
            <div className="services-text-wrapper">
              <h1>Plumbing</h1>
              <p>
                A leaky faucet or old toilet can waste a lot of time and energy
                for any residence. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce viverra cursus quam eu eleifend. Duis
                volutpat accumsan odio volutpat congue. Ut euismod interdum urna
                eu tristique.
              </p>
            </div>
            <div className="services-text-wrapper">
              <h1>Leaks & Clogs</h1>
              <p>
                It’s a dirty job, but I’m always ready to do it. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce viverra
                cursus quam eu eleifend. Duis volutpat accumsan odio volutpat
                congue. Ut euismod interdum urna eu tristique.
              </p>
            </div>
          </div>
          <div className="services-right-wrapper">
            <div className="services-text-wrapper">
              <h1>Installations</h1>
              <p>
                Carpentry is the original Sweeney trade. I install and build
                custom cabinets, bookcases, fireplace mantels and more. Duis
                volutpat accumsan odio volutpat congue. Ut euismod interdum urna
                eu tristique. Maecenas ut arcu purus. Vestibulum sit amet dui ac
                justo varius malesuada.
              </p>
            </div>
            <div className="services-text-wrapper">
              <h1>Electrical</h1>
              <p>
                Whether it’s antique or new, traditional or modern, crown
                molding is an art that requires attention to detail. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce viverra
                cursus quam eu eleifend. Duis volutpat accumsan odio volutpat
                congue.
              </p>
            </div>
            <div className="services-text-wrapper">
              <h1>Fixitures</h1>
              <p>
                A leaky faucet or old toilet can waste a lot of time and energy
                for any residence. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce viverra cursus quam eu eleifend. Duis
                volutpat accumsan odio volutpat congue. Ut euismod interdum urna
                eu tristique.
              </p>
            </div>
            <div className="services-text-wrapper">
              <h1>Switches & Dimmers</h1>
              <p>
                It’s a dirty job, but I’m always ready to do it. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce viverra
                cursus quam eu eleifend. Duis volutpat accumsan odio volutpat
                congue. Ut euismod interdum urna eu tristique.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
