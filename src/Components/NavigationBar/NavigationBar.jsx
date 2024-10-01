import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../Assets/logo.png";
const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand companyNameAndLogo" to="/">
            <div>
              <img src={logo} height="60" width="60" alt="logo" />
            </div>
            <div>
              <h4 className="mt-2">Nehal Machinery Ltd</h4>
            </div>
          </Link>

          <button
            className="navbar-toggler focus-ring focus-ring-light me-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <RiMenu3Fill onClick={() => setIsActive(!isActive)} />
          </button>
          <div
            className="collapse navbar-collapse navbarItems"
            id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only"></span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Products & Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Machineries
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Molds
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Raw Materials
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Installation Commission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Consultancy Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Others
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Dropdown 1
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agents">
                  Agents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
