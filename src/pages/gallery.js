import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import image_one from "../images/stock4.jpg";
import image_two from "../images/stock5.jpg";
import image_three from "../images/stock6.jpg";
import image_four from "../images/stock7.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-wrapper">
        <Header />
        <div className="gallery-header-wrapper">
          <h1>Past Projects</h1>
        </div>
        <div className="gallery-squares-wrapper">
          <div className="gallery-squares">
            <div className="gallery-square">
              <div className="gallery-img-wrapper">
                <img src={image_one} alt="gallery-image" />
              </div>
              <div className="gallery-square-text-wrapper">
                <div className="top-text">
                  <h3>Title of Project</h3>
                </div>
                <div className="bottom-text">
                  <p>Short Description</p>
                </div>
              </div>
            </div>
            <div className="gallery-square">
              <div className="gallery-square-text-wrapper">
                <div className="top-text">
                  <h3>Title of Project</h3>
                </div>
                <div className="bottom-text">
                  <p>Short Description</p>
                </div>
              </div>
              <div className="gallery-img-wrapper">
                <img src={image_two} alt="gallery-image" />
              </div>
            </div>
            <div className="gallery-square">
              <div className="gallery-img-wrapper">
                <img src={image_three} alt="gallery-image" />
              </div>
              <div className="gallery-square-text-wrapper">
                <div className="top-text">
                  <h3>Title of Project</h3>
                </div>
                <div className="bottom-text">
                  <p>Short Description</p>
                </div>
              </div>
            </div>
            <div className="gallery-square">
              <div className="gallery-square-text-wrapper">
                <div className="top-text">
                  <h3>Title of Project</h3>
                </div>
                <div className="bottom-text">
                  <p>Short Description</p>
                </div>
              </div>
              <div className="gallery-img-wrapper">
                <img src={image_four} alt="gallery-image" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
