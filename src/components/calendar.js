import React from "react";

function Calendar() {
  return (
    <div className="container border rounded">
      <iframe
        title="calendar"
        src="https://calendar.google.com/calendar/embed?src=tampacentralcalendar%40gmail.com&ctz=America%2FNew_York"
        className="calendar"
      ></iframe>
    </div>
  );
}

export default Calendar;
