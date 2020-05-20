import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

//images
import heroImg from "../img/heroimg.jpg";
import tampaPhoto from "../img/tampa.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container parallax">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src={heroImg} />

          <div data-src={tampaPhoto} />
        </AutoplaySlider>
      </div>
    );
  }
}

export default Header;
