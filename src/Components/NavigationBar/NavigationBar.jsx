import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light container">
        <Link class="navbar-brand companyName" to="/">
          Nehal Machinery Ltd
        </Link>

        <button
          class="navbar-toggler focus-ring focus-ring-light me-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <RiMenu3Fill onClick={() => setIsActive(!isActive)} />
        </button>
        <div
          class="collapse navbar-collapse navbarItems"
          id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link class="nav-link" to="/home">
                Home <span class="sr-only"></span>
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
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
                    aria-expanded="false">
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
              <Link class="nav-link" to="/agents">
                Agents
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
