import React from "react";
import Fade from "react-reveal/Fade";

function Calendar() {
  return (
    <div className="container border rounded">
      <Fade bottom>
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?src=tampacentralcalendar%40gmail.com&ctz=America%2FNew_York"
          className="calendar"
        ></iframe>
      </Fade>
    </div>
  );
}

export default Calendar;
