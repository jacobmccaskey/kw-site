import React from "react";
import Fade from "react-reveal/Fade";
import * as Util from "./util";

function Resources() {
  return (
    <div>
      <Fade bottom>
        <h2>
          <i>Agent Resources</i>
        </h2>
      </Fade>
      <br />
      <hr />
      {/* getting started guide */}
      <Fade bottom>
        <div className="container-sm ">
          <p style={{ fontWeight: 600 }} className="text-left">
            Getting Started
          </p>

          <p className="text-left">
            We provide resources to help make your transition to Keller Williams
            as soon as possible. Whether you are new to Real Estate, or
            transfering from another company, we strive to make the process as
            smooth as possible. Please click on the link below to access the our
            agent resources folder.
          </p>
          <button
            className="btn btn-outline-secondary text-center"
            onClick={Util.resourceDrive}
          >
            Click Me
          </button>
        </div>
      </Fade>
      {/* agent Support */}
      <Fade bottom>
        <div className="container-sm text-left">
          <hr />
          <p style={{ fontWeight: 600 }} className="text-left">
            Support
          </p>

          <p className="text-left">Scott Le Roy</p>
          <br />
          <span>
            <i>support@scottleroy.com</i>
          </span>
          <br />
          <p className="text-left">Keller Williams Support</p>
          <span>some email</span>
          <br />
          <i>888-888-8888</i>
        </div>
      </Fade>
      {/* training */}
      <Fade bottom>
        <div className="container-sm text-left">
          <hr />
          <p style={{ fontWeight: 600 }} className="text-left">
            Training
          </p>
          <span>some text here about training, put link to calendar</span>
        </div>
      </Fade>
      {/* helpful websites */}
      <Fade bottom>
        <div className="container-sm text-left">
          <hr />
          <p style={{ fontWeight: 600 }} className="text-left">
            Helpful websites
          </p>
          <span>insert table with links to websites</span>
        </div>
      </Fade>
      {/* facebook group stuff */}
      <Fade bottom>
        <div className="container-sm">
          <hr />
          <p style={{ fontWeight: 600 }} className="text-left">
            Facebook Group
          </p>
          <p className="text-left">
            We have a private facebook group! This is a great place to connect
            with other agents in the office, advertise listings, post open
            houses, or just ask general questions.
          </p>
          <button
            className="btn btn-outline-secondary"
            onClick={Util.facebookGroup}
          >
            Get Connected
          </button>
        </div>
      </Fade>
    </div>
  );
}

export default Resources;

// agent support, training, facebook group, helpful websites
