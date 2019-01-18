/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.scss";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
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

        <a className="navbar-item is-hidden-desktop">
          <span className="icon badge is-badge-danger" data-badge="9+">
            <i className="fa fa-bell" />
          </span>
        </a>
        <a className="navbar-item is-hidden-desktop">
          <span className="icon badge is-badge-danger" data-badge="8">
            <i className="fa fa-envelope" />
          </span>
        </a>
        <a className="navbar-item is-hidden-desktop">
          <span className="icon">
            <i className="fa fa-user-circle" />
          </span>
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
  )
}

export default Navbar

