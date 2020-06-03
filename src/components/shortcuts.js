import React, { Component } from "react";
import * as Routes from "../constants/routes";
import FacebookModal from "./facebookModal";
import { Link } from "react-router-dom";
import * as Util from "./util";

class Shortcuts extends Component {
  state = {};

  render() {
    return (
      <div className="container-sm text-center mb-4">
        <Link to={Routes.RESOURCES}>
          <button className="btn btn-lg btn-danger m-2 button">
            Getting Started
          </button>
        </Link>

        <Link to={Routes.TUTORIALS}>
          <button className="btn btn-lg btn-danger m-2 button">
            Tutorials
          </button>
        </Link>

        <Link to={Routes.CALENDAR}>
          <button className="btn btn-lg btn-danger m-2 button">Calendar</button>
        </Link>

        <button
          className="btn btn-lg btn-danger m-2 button"
          onClick={Util.command}
        >
          Command
        </button>

        <button
          className="btn btn-lg btn-danger m-2 button"
          onClick={Util.connect}
        >
          Connect
        </button>

        <Link to={Routes.RESOURCES}>
          <button className="btn btn-lg btn-danger m-2 button">
            Agent Resources
          </button>
        </Link>

        <button
          className="btn btn-lg btn-danger m-2 button"
          onClick={Util.websiteGuide}
        >
          Website Guide
        </button>

        <FacebookModal className="btn btn-danger m-2 btn-lg button" />
      </div>
    );
  }
}

export default Shortcuts;
