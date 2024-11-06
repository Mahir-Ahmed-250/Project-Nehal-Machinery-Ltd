import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../Assets/logo.png";
import useFirebase from "../../Hooks/useFirebase";
import swal from "sweetalert";
import { FiLogOut } from "react-icons/fi";
const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, logOut } = useFirebase();

  const handleLogout = () => {
    swal("Logout Warning!", "Do you really want to logout?", "warning", {
      buttons: {
        cancel: "NO",
        catch: {
          text: "YES",
          value: "catch",
        },
      },
    }).then((value) => {
      switch (value) {
        case "catch":
          logOut();
          swal("Well Done!", "You are successfully logged out!", "success");
          break;
        default:
      }
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <Link className="navbar-brand companyNameAndLogo ms-4" to="/">
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
          aria-label="Toggle navigation"
        >
          <RiMenu3Fill onClick={() => setIsActive(!isActive)} />
        </button>
        <div
          className="collapse navbar-collapse navbarItems me-4"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            {/* <li className="dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Messages
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/chairman">
                      Message from Chairman
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/md">
                     Message from Managing Director
                    </Link>
                  </li>
                </ul>
              </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products & Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/machineries">
                    Machineries
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/molds">
                    Molds
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/raw">
                    Raw Materials
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/erection">
                    Erection
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/consultancy">
                    Consultancy Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/others">
                    Others
                  </Link>
                </li>

                {/* <li className="nav-item dropend">
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
                </li> */}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/affiliated">
                Affiliated
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
            {user ? (
              <Link to="/admin">
                <img width="50px" src={logo} alt="" />
              </Link>
            ) : (
              <></>
            )}
            {user ? (
              <li
                style={{ cursor: "pointer" }}
                className="nav-link"
                onClick={handleLogout}
              >
                <FiLogOut className="me-1" />
                Log Out
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
