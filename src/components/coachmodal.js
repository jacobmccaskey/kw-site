import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import validator from "validator";

class CoachContactForm extends Component {
  state = {
    show: null,
    name: "",
    email: "",
    message: "",
    beforeFormSubmitMessage: "Contact Coaches",
    afterFormSubmit: "Thank you for contacting us!",
    coachBtn: true,
    validateForm: false,
  };

  validateAndSend = (e) => {
    if (
      validator.isAlpha(this.state.name) === true &&
      validator.isEmail(this.state.email) === true &&
      validator.isAscii(this.state.message) === true
    ) {
      this.setState({
        validateForm: true,
      });
      this.handleSubmit();
      this.handleClose();
    } else {
      alert("not a valid entry");
    }
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    fetch("http://localhost:4000/coaching/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => console.log("success!", data))
      .catch((error) => console.error("error", error));

    this.setState({
      coachBtn: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: null,
      name: "",
      email: "",
      message: "",
      validateForm: false,
    });
  };
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-danger mb-4 coach-btn"
          onClick={() => this.handleShow()}
        >
          {this.state.coachBtn === true
            ? this.state.beforeFormSubmitMessage
            : this.state.afterFormSubmit}
        </button>

        <Modal
          show={this.state.show}
          onHide={() => this.handleShow()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => this.validateAndSend(e)}>
              <span className="coach-p">Full Name</span>
              <br />
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={(e) => this.handleChange(e)}
              />
              <br />
              <span className="coach-p">Email</span>
              <br />
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={(e) => this.handleChange(e)}
              />
              <br />
              <span className="coach-p">Message</span>
              <br />
              <textarea
                type="textarea"
                value={this.state.message}
                name="message"
                onChange={(e) => this.handleChange(e)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => this.validateAndSend(e)}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CoachContactForm;
