import React from "react";
import { Link } from "react-router-dom";

const Navbar = function (props) {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{
          background: "#c9ffbf",
          background: "-webkit-linear-gradient(to right, #c9ffbf, #ffafbd)",
          background: "linear-gradient(to right, #c9ffbf, #ffafbd)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={props.login ? "/login-true" : "/"}>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={props.login ? "/login-true" : "/"}
                >
                  Top News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={props.login ? "/login-true/business" : "/"}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={props.login ? "/login-true/entertainment" : "/"}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="technology">
                  Tech
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose Country
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Your Location
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      The United States
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      France
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
