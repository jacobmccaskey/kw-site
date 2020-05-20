import React, { Component } from "react";

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
              <button className="btn btn-lg btn-danger button">Training</button>
            </th>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">Calendar</button>
            </th>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">Command</button>
            </th>
          </thread>
          <thread>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">Connect</button>
            </th>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">
                Agent Resources
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">
                Website Guide
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-lg btn-danger button">
                Facebook Group
              </button>
            </th>
          </thread>
        </table>
      </div>
    );
  }
}

export default Shortcuts;
