import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-bootstrap/Modal";

function Calendar() {
  return (
    <div className="container-sm border rounded">
      <Fade bottom>
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23D50000&amp;ctz=America%2FNew_York&amp;src=dGFtcGFjZW50cmFsY2FsZW5kYXJAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bHBmdGk5ZTRuYzBqYWUxNTZmMWk5dDRsNTI5MjRmYW5AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%230B8043&amp;color=%23E4C441&amp;showTz=0&amp;showCalendars=1&amp;showTabs=0&amp;showDate=0&amp;showNav=0&amp;showTitle=0&amp;title=Keller%20Williams%20Tampa%20Central"
          className="calendar m-4 container-sm"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <br />
        <OpenModal />
      </Fade>
    </div>
  );
}

function OpenModal() {
  const [show, setState] = useState(null);
  return (
    <React.Fragment>
      <button className="btn btn-primary mb-2" onClick={() => setState(true)}>
        Subscribe
      </button>
      <Modal
        show={show}
        onHide={() => setState(null)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Subscribe To Our Office Calendar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please provide the following URL when requested by your calendaring
            system that supports subscribed calendars.
          </p>
          <span>
            <i>
              >>
              http://kwmci.ical.backagent.net/?24e21db6-9552-4ad4-96fe-0a0ab384fd68
            </i>
          </span>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default Calendar;
