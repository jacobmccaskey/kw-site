import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import * as Util from "./util";

class FacebookModal extends Component {
  state = {
    show: null,
  };

  openModal = () => {
    this.setState({
      show: true,
    });
  };

  closeModal = () => {
    this.setState({
      show: null,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-danger btn-lg button"
          onClick={() => this.openModal()}
        >
          Facebook Groups
        </button>
        <Modal
          show={this.state.show}
          onHide={() => this.closeModal()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Private Facebook Groups</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="coach-p">
              <i>Please request to join:</i>
            </p>
            <br />
            <button
              className="btn btn-danger mb-3"
              style={{ width: "60%" }}
              onClick={() => Util.facebookGroup()}
            >
              General Facebook Group
            </button>
            <br />
            <button
              className="btn btn-danger"
              style={{ width: "60%" }}
              onClick={() =>
                Util.openNewWindow(
                  "https://www.facebook.com/groups/1018914358308149"
                )
              }
            >
              Listing Showcase
            </button>
          </Modal.Body>
          <Modal.Footer className="text-center">
            <Button variant="secondary" onClick={() => this.closeModal()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default FacebookModal;
