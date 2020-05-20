import React from "react";
import NavBar from "./components/navbar.js";
import Header from "./components/header";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="parallax-wrapper">
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
