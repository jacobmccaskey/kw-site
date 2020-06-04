import React, { Component } from "react";
import * as Routes from "../constants/routes";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import favicon from "../img/favicon.ico";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class NavBar extends Component {
  state = {
    input: "",
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    const { input } = this.state;
    const toLowerCase = input.toLowerCase();
    if (
      toLowerCase === "help" ||
      toLowerCase === "resources" ||
      toLowerCase === "resource" ||
      toLowerCase === "guide" ||
      toLowerCase === "websites"
    ) {
      return window.open(`${Routes.RESOURCES}`);
    }
    if (
      toLowerCase === "tutorial" ||
      toLowerCase === "tutorials" ||
      toLowerCase === "videos" ||
      toLowerCase === "video" ||
      toLowerCase === "walk through" ||
      toLowerCase === "walk thru" ||
      toLowerCase === "walk-thru" ||
      toLowerCase === "command" ||
      toLowerCase === "how do i get paid?" ||
      toLowerCase === "how do i get paid"
    ) {
      return window.open(`${Routes.TUTORIALS}`);
    }
    if (toLowerCase === "shortcuts") return window.open(`${Routes.HOME}`);
    if (toLowerCase === "calendar") return window.open(`${Routes.CALENDAR}`);
    else {
      window.open(`
    https://answers.kw.com/hc/en-us/search?utf8=%E2%9C%93&query=${toLowerCase}
    `);
    }
    this.setState({
      input: "",
    });
    e.preventDefault();
  };
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          <img
            src={favicon}
            className="d-inline-block align-top favicon-nav"
            alt="favicon"
          />{" "}
          Real-TeK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={Routes.HOME}>Home</Nav.Link>
            <Nav.Link href={Routes.TUTORIALS}>Tutorials</Nav.Link>
            <Nav.Link href={Routes.RESOURCES}>Resources</Nav.Link>
            <Nav.Link href={Routes.COACHING}>Coaching</Nav.Link>
            <NavDropdown title="Quick Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://agent.kw.com/command">
                Command
              </NavDropdown.Item>
              <NavDropdown.Item href="#https://www.kwconnect.com">
                KW Connect
              </NavDropdown.Item>
              <NavDropdown.Item href="https://rooms.docusign.com">
                DocuSign
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.stellarmls.com">
                MLS
              </NavDropdown.Item>
              <NavDropdown.Item href={Routes.CALENDAR}>
                Calendar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form onSubmit={(e) => this.onSubmit(e)} inline>
            <FormControl
              value={this.state.input}
              name="input"
              type="text"
              placeholder="Search"
              className="mr-sm-2 text-left"
              onChange={(e) => this.onChange(e)}
            />
            <Button
              variant="outline-secondary"
              onClick={(e) => this.onSubmit(e)}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
