import React from "react";
import Fade from "react-reveal/Fade";
import CoachContactForm from "./coachmodal";
import * as Util from "./util";
import logo from "../img/coach-logo.jpg";
import billy from "../img/billy.png";
import ivan from "../img/ivan.jpg";

function Coaches() {
  return (
    <React.Fragment>
      <div className="container">
        <Fade bottom>
          <table className="table">
            <thread>
              {/* <th scope="col">
                <div className="container-sm">
                  <img
                    className="rounded image-box"
                    src={nick}
                    loading="lazy"
                    alt="nicholas buchanan"
                  />
                  <p className="coaching-font">Nicholas Buchanan</p>
                </div>
              </th> */}
              <th scope="col">
                <div className="container-sm">
                  <img
                    className="rounded image-box"
                    src={ivan}
                    loading="lazy"
                    alt="ivan castillo"
                  />
                  <p className="coaching-font">
                    Ivan Castillo | Head Productivity Coach
                  </p>
                </div>
              </th>
              <th scope="col">
                <div className="container-sm">
                  <img
                    className="rounded image-box"
                    src={billy}
                    alt="billy lolly"
                    loading="lazy"
                  />
                  <p className="coaching-font">Billy Lolly</p>
                </div>
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
            Keller Williams Tampa Central is pleased to extend participation to
            all our new and seasoned agents to the productivity coaching
            program. We provide a platform to grow your business in an
            environment with limitless posibilities. If you are looking for
            personalized, one-on-one training, the platinum coaching program is
            for you!
          </p>
          <br />
          <CoachContactForm />
        </Fade>
      </div>
    </React.Fragment>
  );
}

export default Coaches;
