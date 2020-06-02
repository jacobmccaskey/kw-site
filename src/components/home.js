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
        <div className="container-sm">
          <Header />
          <img className="photo" src={mcLogo} alt="mclogo" />
        </div>
        <div className="container body-txt pt-4">
          <Fade bottom>
            <h2 style={{ fontWeight: "500" }} className="coach-p">
              Agent Services
            </h2>
          </Fade>
          <Fade bottom>
            {" "}
            <p>
              This site is designed to help you with all avenues of training and
              information within Keller Williams Tampa Central. You will be able
              to find links to common websites you use everyday as a Real Estate
              Agent. The Tutorials page offers several walk-thru's on KW
              Command, from marketing to completing a transaction. The resources
              page is designed as a quick reference guide to support websites
              and additional learning material. The search portals found on the
              resource page and navigation pane link to 'answers.kw.com,' a
              website with a plethora of tutorials on all things KW. Take a look
              around, subscribe to our calendar, and if you are a Realtor
              looking to join, please contact us below.
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
