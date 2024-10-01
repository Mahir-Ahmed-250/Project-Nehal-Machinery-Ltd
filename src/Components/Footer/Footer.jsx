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
                <p>Address: Malek Tower (5th Floor), Opposite to Farmgate Police Box, Farmgate, Dhaka-1215.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14616.220162505537!2d90.39000659999999!3d23.759395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a126b29789%3A0xe7aeda8c5c81db08!2sUdvash%20Farmgate%20Branch!5e0!3m2!1sen!2sbd!4v1727790051092!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Footer;