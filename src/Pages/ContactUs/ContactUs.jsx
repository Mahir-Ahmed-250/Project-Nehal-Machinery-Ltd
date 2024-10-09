import React from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import "./ContactUs.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { BiSolidFactory } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlinePhone } from "react-icons/md";
const ContactUs = () => {
  return (
    <>
      <div className="contactUsBannerContainer">
        <BannerTitle title1="Contact Us" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <h2 className="contact-text-1 text-center mt-4">
          Get in touch with us
        </h2>
        <h5 className="contact-text-2 text-center">
          For information regarding our services, to request a proposal or quote
          for new projects and for general inquiries and other requests please
          contact us or schedule a visit at our office.{" "}
        </h5>
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <a
              href="https://maps.app.goo.gl/Chb3JyqUaBkT7SCK7"
              rel="noreferrer"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#161616",
              }}>
              <center className="contactCard pt-5">
                {" "}
                <PiBuildingOfficeBold size={80} />
                <h3 className="contactCardTitle">Operational Office</h3>
                <h5 className="contactCardDesc">
                  {" "}
                  House: 03 (5th floor), Road no: 15 Sector: 01, Uttara,
                  Dhaka-1230
                </h5>
              </center>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <center className="contactCard">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7296.913961020144!2d90.38996559514744!3d23.8734089252693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c413f6b912eb%3A0x44e49a402a8f6b33!2zUmQgTm8gMTUsIOCmouCmvuCmleCmviAxMjMw!5e0!3m2!1sbn!2sbd!4v1728497192610!5m2!1sbn!2sbd"
                title="operationalOffice"
                allowfullscreen=""
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <center className="contactCard">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3114004567196!2d90.40512817595719!3d23.736272389317428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9a15b8d6cc5%3A0x6f95b7cfd1bcf8a0!2z4KaH4Ka44KeN4Kaf4Ka-4Kaw4KeN4KaoIOCmruCnjeCmr-CmvuCmqOCmtuCmqA!5e0!3m2!1sbn!2sbd!4v1728497865150!5m2!1sbn!2sbd"
                title="operationalOffice"
                allowfullscreen=""
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </center>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <a
              href="https://maps.app.goo.gl/gDhfPxCJcc4r7KTG8"
              rel="noreferrer"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#161616",
              }}>
              <center className="contactCard pt-5">
                {" "}
                <HiOutlineOfficeBuilding size={80} />
                <h3 className="contactCardTitle">Register Office</h3>
                <h5 className="contactCardDesc">
                  {" "}
                  67/9, Kakrail, Eastern Mansion (2nd floor) Room: 6, Dhaka-1000
                </h5>
              </center>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <a
              href="https://maps.app.goo.gl/VkKhcryB6hvsP5Qe7"
              rel="noreferrer"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#161616",
              }}>
              <center className="contactCard pt-5">
                {" "}
                <BiSolidFactory size={80} />
                <h3 className="contactCardTitle"> Factory</h3>
                <h5 className="contactCardDesc">
                  {" "}
                  44 South kunipara, Tejgaon I/A Dhaka-1208
                </h5>
              </center>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <center className="contactCard">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.596403838365!2d90.40163987595777!3d23.761767588338767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b882b2eec75f%3A0x11899757bb85555d!2zNDQg4KaV4KeB4Kao4Ka_4Kaq4Ka-4Kec4Ka-IOCmqOCngeCmsCDgpqvgpr7gprDgp43gpq7gp4fgprjgp4Ag4Ka44Kec4KaVLCDgpqLgpr7gppXgpr4gMTIwOA!5e0!3m2!1sbn!2sbd!4v1728498249374!5m2!1sbn!2sbd"
                title="operationalOffice"
                allowfullscreen=""
                width="100%"
                height="100%"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </center>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <a
                href="mailto:saiful@nehalml.com"
                rel="noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#161616",
                }}>
                <center className="contactCard pt-5">
                  {" "}
                  <SiMinutemailer size={80} />
                  <h5 className="contactCardDesc"> saiful@nehalml.com</h5>
                </center>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <center className="contactCard pt-5">
                <FaFacebook size={70} color=" 	#1877F2" />

                <iframe
                  className="mt-4"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61565767172042&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=880734809477254"
                  width="340"
                  height="130"
                  title="fb"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </center>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <a
                href="callto:+8801725046048"
                rel="noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#161616",
                }}>
                <center className="contactCard pt-5">
                  {" "}
                  <MdOutlinePhone size={80} />
                  <h5 className="contactCardDesc"> +8801725046048</h5>
                </center>
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ContactUs;
