//we can write rfc this whole will come
import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Navbar(props) {
  return (
    //we are putting {} in nav b/c we want to write javascript in it
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-primary" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-primary"
                aria-current="page"
                href="/"
              >
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode} 
            />
            <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//synatx of writing propTypes in function based component -this we do to set values as like here title we want tilte always a string  sowme did this- if we give number to tilte then error will occur

Navbar.propTypes = {
  /* title:PropTypes.string,
   aboutText:PropTypes.string */

  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,

  //here isRequired means title and aboutText required hi hai as a props hame inhe dalna hi padega
};

//this is default props if we dont pass props in component then this value will be taken
Navbar.defaultProps = {
  title: "Welcome",
  aboutText: "ye to hai",
};
