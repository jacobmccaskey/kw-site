import React, { Component } from "react";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className="container-sm mt-4 form-center">
        <form key="contact-form" className="border rounded mb-3 pb-3 form">
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
          />
          <br />
          <span style={{ fontWeight: 600 }}>email </span>
          <br />
          <input
            className="border rounded"
            type="text"
            placeholder="...agent@kw.com"
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
