import React from "react";

import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light container">
        <Link class="navbar-brand companyName" href="#">
        Nehal Machinery Ltd
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbarItems" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Home <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
             Products & Services
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li class="nav-item dropend">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown 1
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                   
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Pricing
              </Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
