import React, { Component } from "react";
import Shortcuts from "./shortcuts.js";
import Events from "./events";
import ContactForm from "./contactform";

import mcLogo from "../img/mclogo.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <img className="photo" src={mcLogo} alt="mclogo" />
        </div>
        <div className="container body-txt">
          <h2>Things to help those that are stupid</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel
            fringilla est ullamcorper eget nulla. Eu lobortis elementum nibh
            tellus molestie nunc non blandit. Proin sed libero enim sed faucibus
            turpis in eu. Nulla aliquet enim tortor at auctor urna nunc id.
            Purus sit amet volutpat consequat mauris nunc. Mattis vulputate enim
            nulla aliquet. Ut placerat orci nulla pellentesque dignissim enim
            sit amet venenatis. Dignissim suspendisse in est ante in nibh mauris
            cursus.
          </p>
          <hr></hr>
          <h5>Agent Resources</h5>
          <Shortcuts />
          <Events />
          <ContactForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
