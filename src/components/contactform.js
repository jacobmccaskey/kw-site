import React, { Component } from "react";
import validator from "validator";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    show: null,
    formReply: "Thank you for contacting us!",
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
      this.sendEmail();
    } else {
      alert("not a valid entry");
    }
    e.preventDefault(e);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendEmail = () => {
    fetch("http://localhost:4000/post", {
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
      name: "",
      email: "",
      message: "",
      show: true,
      validateForm: false,
    });
  };

  render() {
    return (
      <div className="cover">
        <div className="mt-4 form-center">
          <form
            key="contact-form"
            className="border rounded mb-3 pb-3 form"
            onSubmit={(e) => this.validateAndSend(e)}
          >
            <div className="bg-light">
              <h4>Contact Us</h4>
              <span>Let us know what you need</span>
            </div>
            <br />

            <span style={{ fontWeight: 600 }}>Full Name </span>
            <i style={{ color: "red" }}>*</i>
            <br />
            <input
              className="border rounded"
              type="text"
              placeholder="type in your name here"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <span style={{ fontWeight: 600 }}>email </span>
            <i style={{ color: "red" }}>*</i>
            <br />
            <input
              className="border rounded"
              type="text"
              placeholder="...agent@kw.com"
              name="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            ></input>
            <br />
            <span style={{ fontWeight: 600 }}>message</span>
            <i style={{ color: "red" }}>*</i>
            <br />
            <textarea
              type="text"
              placeholder="...I have a question for you"
              className="border rounded txt-area"
              name="message"
              value={this.state.message}
              onChange={(e) => this.handleChange(e)}
            ></textarea>
            <br />

            <button type="submit" className="btn btn-outline-secondary">
              {this.state.show !== true ? "submit" : this.state.formReply}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
