import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Routes from "../constants/routes";

import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

//https://answers.kw.com/hc/en-us/search?utf8=%E2%9C%93&query={this.state.search}
class NavBar extends Component {
  state = {
    input: "",
    search: "",
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    const { input } = this.state;
    let searchQuery = input.split(" ");
    searchQuery.join("+");
    window.open(
      `https://answers.kw.com/hc/en-us/search?utf8=%E2%9C%93&query=${searchQuery}`
    );
    this.setState({
      input: "",
    });
    e.preventDefault();
  };
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Quick Guide
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={Routes.HOME} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://agent.kw.com">
                Command
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://realestate.docusign.com">
                DocuSign
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://kwconnect.com">
                Connect
              </a>
            </li>
            <li className="nav-item">
              <Link to={Routes.RESOURCES} className="nav-link">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to={Routes.CALENDAR} className="nav-link">
                Calendar
              </Link>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={(e) => this.onSubmit(e)}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              name="input"
              placeholder="Search"
              aria-label="Search"
              value={this.state.input}
              onChange={(e) => this.onChange(e)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
