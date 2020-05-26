import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendEmail = (e) => {
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
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="container-sm mt-4 form-center">
        <form
          key="contact-form"
          className="border rounded mb-3 pb-3 form"
          onSubmit={(e) => this.sendEmail(e)}
        >
          <div className="bg-light">
            <h4>Contact Us</h4>
            <span>Please tell us how stupid you are</span>
          </div>
          <br />

          <span style={{ fontWeight: 600 }}>full name </span>
          <br />
          <input
            className="border rounded"
            type="text"
            placeholder="mentally challenged name here"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <span style={{ fontWeight: 600 }}>email </span>
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
          <span className="border rounded" style={{ fontWeight: 600 }}>
            message
          </span>
          <br />
          <textarea
            type="text"
            placeholder="...question about greensheet"
            className="border rounded txt-area"
            name="message"
            value={this.state.message}
            onChange={(e) => this.handleChange(e)}
          ></textarea>
          <br />

          <button type="submit" className="btn btn-outline-info">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
