import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Discover from "./pages/Discover";
import ManageResource from "./pages/ManageResource";
import Navbar from "./components/Navbar";

import "./App.css";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "navbar navbar"
    "sidebar main";
  grid-template-columns: auto 1fr;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <manifold-connection env="stage">
            <Container>
              <Navbar />
              <Sidebar />
              <Route path="/" component={Discover} />
              <Route
                path="/resources/:resourceId/edit"
                component={ManageResource}
              />
            </Container>
          </manifold-connection>
        </Router>
      </div>
    );
  }
}

export default App;
