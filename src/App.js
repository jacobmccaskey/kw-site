import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Routes from "./constants/routes";
import NavBar from "./components/navbar.js";
import Home from "./components/home";
import Calendar from "./components/calendar";
import Resources from "./components/resources";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path={Routes.HOME} component={Home} />
        <Route path={Routes.CALENDAR} component={Calendar} />
        <Route path={Routes.RESOURCES} component={Resources} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
