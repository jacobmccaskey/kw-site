import React from "react";
// import CoachContactForm from "./coachmodal";
import Fade from "react-reveal/Fade";
import * as Util from "./util";
import logo from "../img/coach-logo.jpg";
import billy from "../img/billy.png";
import nick from "../img/nick.png";
import ivan from "../img/ivan.jpg";

function Coaches() {
  return (
    <React.Fragment>
      <div className="container">
        <Fade bottom>
          <table className="table">
            <thread>
              <th scope="col">
                <img
                  className="rounded image-box"
                  src={nick}
                  alt="nicholas buchanan"
                />
                <p className="coaching-font">Nicholas Buchanan</p>
              </th>
              <th scope="col">
                <img
                  className="rounded image-box"
                  src={ivan}
                  alt="ivan castillo"
                />
                <p className="coaching-font">
                  Ivan Castillo | Head Productivity Coach
                </p>
              </th>
              <th scope="col">
                <img
                  className="rounded image-box"
                  src={billy}
                  alt="billy lolly"
                />
                <p className="coaching-font">Billy Lolly</p>
              </th>
            </thread>
          </table>
        </Fade>
        <div className="container-sm">
          <Fade bottom>
            <img
              src={logo}
              alt="coach logo"
              onClick={() =>
                Util.openNewWindow("https://tlrnation.com/2019/07/tampa-fl")
              }
            ></img>
          </Fade>
        </div>
        <hr />
        <Fade bottom>
          <p className="coach-p">
            Tampa Central offers a coaching program for agents that want to take
            their business to the next level. If you are looking for
            personalized, one-on-one training, the platinum coaching program is
            for you.
          </p>
          <br />
          <button className="btn btn-danger mb-4 coach-btn">
            Contact Coaches
          </button>
        </Fade>
      </div>
    </React.Fragment>
  );
}

export default Coaches;
