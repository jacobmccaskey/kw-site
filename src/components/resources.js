import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import skyScraper from "../img/skyscraper.jpg";
import { Link } from "react-router-dom";
import * as Routes from "../constants/routes";

import * as Util from "./util";

class Resources extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { input } = this.state;
    const toLowerCase = input.toLowerCase();
    if (
      toLowerCase === "help" ||
      toLowerCase === "resources" ||
      toLowerCase === "resource" ||
      toLowerCase === "guide" ||
      toLowerCase === "websites"
    ) {
      window.open(`${Routes.RESOURCES}`);
    }
    if (
      toLowerCase === "tutorial" ||
      toLowerCase === "tutorials" ||
      toLowerCase === "videos" ||
      toLowerCase === "video" ||
      toLowerCase === "walk through" ||
      toLowerCase === "walk thru" ||
      toLowerCase === "walk-thru" ||
      toLowerCase === "command" ||
      toLowerCase === "how do i get paid?" ||
      toLowerCase === "how do i get paid"
    ) {
      window.open(`${Routes.TUTORIALS}`);
    }
    if (toLowerCase === "shortcuts") window.open(`${Routes.HOME}`);
    if (toLowerCase === "calendar") window.open(`${Routes.CALENDAR}`);
    else {
      window.open(`
    https://answers.kw.com/hc/en-us/search?utf8=%E2%9C%93&query=${input}
    `);
    }

    this.setState({
      input: "",
    });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Fade bottom>
          <div className="box container-sm">
            <img src={skyScraper} alt="skyscraper" loading="lazy" />
            <div className="text margin-top-text">
              <h2 className="coach-p">Resource Portal</h2>
              <br />
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                  className="form-control text-left"
                  onChange={(e) => this.handleChange(e)}
                  name="input"
                  value={this.state.input}
                ></input>
              </form>
            </div>
          </div>
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
              We provide resources to help make your transition to Keller
              Williams as soon as possible. Whether you are new to Real Estate,
              or transfering from another company, we strive to make the process
              as smooth as possible. Please click on the link below to access
              the our agent resources folder.
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
            <div className="container-sm">
              {" "}
              <p style={{ fontWeight: 600 }}>Support</p>
              <span>Please contact the office at 813-865-0700 or email </span>
              <a href="mailto:frontdesk738@kw.com">frontdesk738@kw.com </a>
              <span>
                to reserve a conference room. For any tech related questions,
                please email Jacob at{" "}
              </span>
              <a href="mailto:jacobmccaskey@kw.com">jacobmccaskey@kw.com</a>
            </div>
            <br />
            <p
              className="text-left"
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Scott Le Roy Marketing
            </p>

            <span>
              <i>support@scottleroymarketing.com</i>
            </span>
            <br />
            <span>(321) 236-2568</span>

            <br />
            <br />
            <p
              className="text-left"
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Office Support
            </p>
            <span>
              (813) 865-0700 | 1208 E Kennedy Blvd Suite 231 Tampa, FL 33602
            </span>
            <br />
            <ul>
              <li className="text-left coach-p">
                Jacob McCaskey | Agent Services | jacobmccaskey@kw.com
              </li>

              <li className="text-left">
                <span>
                  Marta Vega | Market Center Administrator | klrw738@kw.com
                </span>
              </li>

              <li className="text-left">
                <span>Dallas Coffield | Team Leader | dcoffield@kw.com</span>
              </li>

              <li className="text-left">
                <span>
                  Danny Gitsas | Director of First Impressions |
                  frontdesk738@kw.com
                </span>
              </li>

              <li className="text-left">
                <span>Bill Kilpatrick | Broker | bill.kilpatrick@kw.com</span>
              </li>
            </ul>

            <br />
            <p
              className="text-left"
              style={{ fontWeight: 500, textDecoration: "underline" }}
            >
              Coaches
            </p>
            <ul>
              <li className="text-left coach-p">
                Ivan Castillo | icastillo@kw.com | (813) 463-8345
              </li>
              <li className="text-left coach-p">
                Billy Lolly | billylolly@kw.com | (813) 966-7446{" "}
              </li>
              {/* <li className="text-left coach-p">
                Nicholas Buchanan | njbuchanan@kw.com | (813) 760-1054
              </li> */}
            </ul>

            <br />
            <p style={{ textDecoration: "underline" }}>
              Would you like to learn more about coaching?
            </p>
            <div className="container-sm">
              <Link to={Routes.COACHING} className="btn btn-outline-danger">
                Learn More
              </Link>
            </div>
          </div>
        </Fade>
        {/* training */}
        <Fade bottom>
          <div className="container-sm text-left">
            <hr />
            <p style={{ fontWeight: 600 }} className="text-left">
              Training
            </p>
            <span>
              We offer weekly classes in the market center and online via zoom.
              Classes are catered towards agents of all experience levels and
              cover several topics. For a full outline of our training schedule,
              click on the link below to access our calendar.
            </span>
            <div className="container-sm">
              <Link
                to={Routes.CALENDAR}
                className="btn btn-outline-danger mt-2"
              >
                Calendar
              </Link>
            </div>
          </div>
        </Fade>
        {/* helpful websites */}
        <Fade bottom>
          <div className="container-sm text-left">
            <hr />
            <p style={{ fontWeight: 600 }} className="text-left">
              Helpful websites
            </p>
            <div className="container-sm">
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() =>
                  Util.openNewWindow("https://answers.kw.com/hc/en-us")
                }
              >
                answers.kw.com
              </button>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() => Util.openNewWindow("https://yourtekhub.com/")}
              >
                YourTekHub.com
              </button>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() =>
                  Util.openNewWindow(
                    "https://www.youtube.com/watch?v=r-XZErph4yA&list=PLK75KZDqV1zmYQF-hNPH2Qt9GHkUHuId4"
                  )
                }
              >
                66 day challenge
              </button>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() => Util.openNewWindow("https://access.kw.com")}
              >
                mykw.kw.com
              </button>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() =>
                  Util.openNewWindow(
                    "http://www.kwconnect.com/page/livestreams"
                  )
                }
              >
                KW livestreams
              </button>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() => Util.openNewWindow("https://stellarmls.com")}
              >
                MLS
              </button>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() =>
                  Util.openNewWindow(
                    "https://www.kwconnect.com/search?q=%23kwuapprovedguides&tfilter=ALL%2BCONTENT&fbclid=IwAR3iVADS5QdHaJdJ8jimgfKgvOVfG-cnyMuINSvSexNoMMktLcKHFKTjTIc"
                  )
                }
              >
                KWU Guides
              </button>

              <Link
                to={Routes.TUTORIALS}
                className="btn btn-outline-secondary mr-2 mt-1"
              >
                Tutorials
              </Link>
              <button
                className="btn btn-outline-secondary mr-2 mt-1"
                onClick={() =>
                  Util.openNewWindow("https://michaellewismarketingsuite.com/")
                }
              >
                Michael Lewis Marketing
              </button>
            </div>
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
              className="btn btn-outline-secondary mb-4"
              onClick={Util.facebookGroup}
            >
              Get Connected
            </button>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Resources;
