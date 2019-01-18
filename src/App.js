import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
