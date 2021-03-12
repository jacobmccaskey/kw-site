import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Routes from "./constants/routes";
import NavBar from "./components/navbar.js";
import IgniteLogin from "./components/loginpage";
import Home from "./components/home";
import Calendar from "./components/calendar";
import Resources from "./components/resources";
import Coaches from "./components/coaching";
import Footer from "./components/footer";
import Tutorials from "./components/tutorials";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path={Routes.HOME} render={() => <Home />} />
        <Route path={Routes.CALENDAR} component={Calendar} />
        <Route path={Routes.RESOURCES} component={Resources} />
        <Route path={Routes.COACHING} component={Coaches} />
        <Route path={Routes.TUTORIALS} component={Tutorials} />
        <Route path={Routes.IGNITE} component={IgniteLogin} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
