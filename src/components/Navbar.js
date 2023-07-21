import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-lg"
            style={{
              background: "#c9ffbf",
              background: "-webkit-linear-gradient(to right, #c9ffbf, #ffafbd)",
              background: "linear-gradient(to right, #c9ffbf, #ffafbd)",
            }}
          >
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                <strong>News</strong>Monkey
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Top
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Business">
                      Business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Health">
                      Health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Science">
                      Science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Sports">
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Tech">
                      Tech
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}

export default Navbar;
