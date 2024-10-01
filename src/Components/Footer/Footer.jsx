import React from 'react';
import './Footer.css';
import logo from "../../Assets/logo.png";
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
                <p>
                    Machineries
                </p>
                <p>
                    Molds
                </p>
                <p>
                    Raw Materials
                </p>
                <p>
                    Installation Commission
                </p>
                <p>
                    Consultancy Service
                </p>
                <p>
                    Others
                </p>
              </div>
              <div className="col-md-3">
              <h2>Explore</h2>
              <p>
                    Machineries
                </p>
                <p>
                    Molds
                </p>
                <p>
                    Raw Materials
                </p>
                <p>
                    Installation Commission
                </p>
                <p>
                    Consultancy Service
                </p>
                <p>
                    Others
                </p>
              </div>
              <div className="col-md-3">
                <h2>Get In Touch</h2>
                <p>Address: House: 03 (5th floor), Road no: 15 Sector: 01, Uttara, Dhaka-1230</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29217.91020663183!2d90.34037897910154!3d23.738863200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8caa7e60837%3A0xf47efcf6f49b50c5!2sSultan&#39;s%20Dine%2C%20Dhanmondi%20Branch!5e0!3m2!1sen!2sbd!4v1727792274181!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Footer;