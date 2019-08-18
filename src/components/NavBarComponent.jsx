import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeLogo from './images/HomeLogo.png';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <Link class="m-0" href="/">
          <img className=" p-0 img-fluid  size-logo" src={HomeLogo} alt=""/>
        </Link>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarsExample02"
        >
          <ul class="navbar-nav justify-content-between">
          <li class="nav-item">
              <Link
                className="text-white p-3"
                target="_blanck"
                href="/"
              >
                <FontAwesomeIcon
                  icon="home"
                  size="2x"
                  className=""
                />
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="text-white p-3"
                target="_blanck"
                href="/"
              >
                <FontAwesomeIcon
                  icon="mobile-alt"
                  size="2x"
                  className=""
                />
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="text-white p-3"
                target="_blanck"
                href="/"
              >
                <FontAwesomeIcon
                  icon="handshake"
                  size="2x"
                  className=""
                />
              </Link>
            </li>
          </ul>
        </div>
        <div class="nav-item">
              <Link
                className="text-white p-3"
                target="_blanck"
                href="/"
              >
                <FontAwesomeIcon
                  icon="user"
                  size="2x"
                  className=""
                />
              </Link>
            </div>
      </nav>
    );
  }
}

export default NavBar;