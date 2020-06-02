import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Shortcuts from "./shortcuts.js";
import Events from "./events";
import ContactForm from "./contactform";
import Header from "./header";

import mcLogo from "../img/mclogo.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <img className="photo" src={mcLogo} alt="mclogo" />
        </div>
        <div className="container body-txt">
          <Fade bottom>
            <h2>Agent Services</h2>
          </Fade>
          <Fade bottom>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
              vel fringilla est ullamcorper eget nulla. Eu lobortis elementum
              nibh tellus molestie nunc non blandit. Proin sed libero enim sed
              faucibus turpis in eu. Nulla aliquet enim tortor at auctor urna
              nunc id. Purus sit amet volutpat consequat mauris nunc. Mattis
              vulputate enim nulla aliquet. Ut placerat orci nulla pellentesque
              dignissim enim sit amet venenatis. Dignissim suspendisse in est
              ante in nibh mauris cursus.
            </p>
          </Fade>
          <hr></hr>
          <Fade bottom>
            <h5>Agent Resources</h5>
            <Shortcuts />
          </Fade>
          <Fade bottom>
            <Events />
          </Fade>
          <Fade bottom>
            <ContactForm />
          </Fade>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
