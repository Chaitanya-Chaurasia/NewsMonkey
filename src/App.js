import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general1"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="science1"
                  pageSize={5}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="health1"
                  pageSize={5}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  key="sports1"
                  pageSize={5}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/Tech"
              element={
                <News
                  key="tech1"
                  pageSize={5}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="business1"
                  pageSize={5}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="entertainment1"
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
