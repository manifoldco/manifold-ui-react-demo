import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Discover from "./pages/Discover";
import ManageResource from "./pages/ManageResource";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <manifold-connection env="stage">
            <Route path="/" component={Discover} />
            <Route
              path="/resources/:resourceId/edit"
              component={ManageResource}
            />
          </manifold-connection>
        </Router>
      </div>
    );
  }
}

export default App;
