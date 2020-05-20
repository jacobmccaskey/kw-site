import React, { Component } from "react";

class Events extends Component {
  state = {};
  render() {
    return (
      <div className="container-sm events">
        <div className="border rounded">
          <h5>Upcoming Events</h5>
          <p>
            <i>There are no upcoming events at this time...</i>
          </p>
        </div>
      </div>
    );
  }
}

export default Events;
