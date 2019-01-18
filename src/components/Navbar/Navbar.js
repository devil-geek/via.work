/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Navbar.scss";
import Searchbar from '../Searchbar/Searchbar'

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h3 className="title is-6 has-text-white">
              Via Work
              <span className="icon">
                <i className="fa fa-bars" />
              </span>
            </h3>
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Searchbar />
            </div>
            <a className="navbar-item">
              <span className="icon badge is-badge-danger" data-badge="9+">
                <i className="fa fa-bell" />
              </span>
            </a>
            <a className="navbar-item ">
              <span className="icon badge is-badge-danger" data-badge="8">
                <i className="fa fa-envelope" />
              </span>
            </a>
            <a className="navbar-item">
              <span className="icon">
                <i className="fa fa-user-circle" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
