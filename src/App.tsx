import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Discover from "./pages/Discover";
import ManageResource from "./pages/ManageResource";
import Navbar from "./components/Navbar";
import NewResource from "./pages/NewResource";

import "./App.css";
import theme from "./lib/theme";
import Sidebar from "./components/Sidebar";
import EditResource from "./pages/EditResource";

const Container = styled.div`
  display: grid;
  font-family: ${({ theme }) => theme.font.default};
  font-size: ${({ theme }) => theme.font.base};
  min-height: 100vh;
  grid-template-areas:
    "navbar navbar"
    "sidebar main";
  grid-template-columns: auto 1fr;
  grid-template-rows: min-content auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>
            <manifold-connection env="prod">
              <Container>
                <Navbar />
                <Sidebar />
                <main role="main">
                  <Switch>
                    <Route path="/" exact component={Discover} />
                    <Route path="/new/resource" component={NewResource} />
                    <Route
                      path="/resources/:resourceName"
                      component={ManageResource}
                    />
                  </Switch>
                  <Route
                    path="/resources/:resourceName/edit"
                    component={EditResource}
                  />
                </main>
              </Container>
            </manifold-connection>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
