/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" height="200" />
            </div>
            <div className="col-md-3">
              <h2>Help</h2>
              <span>Helpline:</span>
              <a
                style={{ textDecoration: "none" }}
                href="tel:+8801725046048"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                +8801725046048
              </a>
              <br />
              <br />
              <span>Email:</span>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:saiful@nehalml.com"
              >
                {" "}
                saiful@nehalml.com
              </a>
            </div>
            <div className="col-md-3">
              <h2>Explore</h2>
              <p>
                <Link className="dropdown-item" to="/machineries">
                  Machineries
                </Link>
              </p>
              <p>
                <Link className="dropdown-item" to="/molds">
                  Molds
                </Link>
              </p>
              <p>
                <Link className="dropdown-item" to="/raw">
                  Raw Materials
                </Link>
              </p>
            </div>
            <div className="col-md-3">
              <h2>Get In Touch</h2>
              <span>Operational Office:</span>{" "}
              <a
                style={{ textDecoration: "none" }}
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                House: 03 (5th floor), Road no: 15 Sector: 01, Uttara,
                Dhaka-1230
              </a>{" "}
              <br />
              <br />
              <span>Register Office:</span>
              <a
                style={{ textDecoration: "none" }}
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                67/9, Kakrail, Eastern Mansion (2nd floor) Room: 6, Dhaka-1000
              </a>
              <br />
              <br />
              <span>Factory:</span>
              <a
                style={{ textDecoration: "none" }}
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                44 South kunipara, Tejgaon I/A Dhaka-1208.
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Footer;
