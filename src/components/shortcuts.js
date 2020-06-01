import React, { Component } from "react";
import * as Routes from "../constants/routes";
import FacebookModal from "./facebookModal";
import { Link } from "react-router-dom";
import * as Util from "./util";

class Shortcuts extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <table className="table">
          <thread>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">
                Getting Started
              </button>
            </th>
            <th scope="col">
              <Link to={Routes.TUTORIALS}>
                <button className="btn btn-lg btn-danger button">
                  Tutorials
                </button>
              </Link>
            </th>
            <th scope="col">
              <Link to={Routes.CALENDAR}>
                <button className="btn btn-lg btn-danger button">
                  Calendar
                </button>
              </Link>
            </th>
            <th scope="col">
              <button
                className="btn btn-lg btn-danger button"
                onClick={Util.command}
              >
                Command
              </button>
            </th>
          </thread>
          <thread>
            <th scope="col">
              <button
                className="btn btn-lg btn-danger button"
                onClick={Util.connect}
              >
                Connect
              </button>
            </th>
            <th scope="col">
              <Link to={Routes.RESOURCES}>
                <button className="btn btn-lg btn-danger button">
                  Agent Resources
                </button>
              </Link>
            </th>
            <th scope="col">
              <button
                className="btn btn-lg btn-danger button"
                onClick={Util.websiteGuide}
              >
                Website Guide
              </button>
            </th>
            <th scope="col">
              <FacebookModal />
              {/* <button
                className="btn btn-lg btn-danger button"
                onClick={Util.facebookGroup}
              >
                Facebook Group
              </button> */}
            </th>
          </thread>
        </table>
      </div>
    );
  }
}

export default Shortcuts;
