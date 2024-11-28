import React from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import "./AboutUs.css";
import { BiSolidFoodMenu } from "react-icons/bi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { TbWorld } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUsBannerContainer">
        <BannerTitle title1="About Us" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <h5 className="aboutUs">
          <strong style={{ fontSize: "50px" }}>Nehal Machinery Ltd</strong> has
          been working in Plastics/Polymer field since 2021 and plays a pivotal
          role in plastics process equipment industry as well as it’s the joint
          stock registered company. To provide top quality products and
          excellent technical services is its long-term commitments to all the
          loyal customers. Our Scope- Injection Molding Machine, Extrusion Line,
          Different Kinds of Molds, All Kinds of Auxiliary Machine (Overhead
          Crane, High Speed Mixer, Hopper Dryer, Auto Loader, Chiller, Crusher,
          Cooling Tower, Color Mixer, Dehumidifier, Screw & Barrel), Powder and
          Granule Material Handling Automation, Pipe/Fittings Belling Machine,
          Pipe Thread Cutting Machine, Film Blown Machine, Stretch Blown Molding
          Machine, PET Blown Machine, Extrusion Blown Machine, Shrink Wrapping
          Machine, Date Code Printing Machine, Thermoforming Machine, Packaging
          Machine, Water Treatment Plant, Industrial HVLS Fan etc. We have very
          good professional supplier who are specially make themselves machine.
          In addition, For individual machine we have individual supplier. A
          technology oriented Company, Nehal Machinery Ltd. is known for
          supplying world-class Plastic Processing Machineries & others
          industrial equipment Great to the very valued and esteemed customers
          from all over the country please allow us to prove to you that “Nehal
          Machinery Ltd” can be your best source of buying plastics machineries.
          Our company is designed with expert team including engineers who are
          always ready to serve the requirements. We always keep our promises to
          keep a good and long term business relationship to our customers all
          over the country.
        </h5>
      </div>
      <div className="homeAboutUsBackgroundImage">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-6">
              <div>
                <BiSolidFoodMenu size={80} className="icon" color="#fff" />
                <h2 className="homeAboutUsCount">
                  {" "}
                  <CountUp end={100} redraw={true} duration={1}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span
                          className="serviceCounterNumber"
                          ref={countUpRef}
                        />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <p className="homeAboutUs">Import Containers/Month</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <TbWorld size={80} className="icon" color="#fff" />
              <h2 className="homeAboutUsCount">
                {" "}
                <CountUp end={3} redraw={true} duration={1}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="serviceCounterNumber" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h2>
              <p className="homeAboutUs">Offices In The World</p>
            </div>
            <div className="col-lg-3 col-6">
              <FaRegClock size={80} className="icon" color="#fff" />
              <h2 className="homeAboutUsCount">
                {" "}
                <CountUp end={5} redraw={true} duration={1}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="serviceCounterNumber" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h2>
              <p className="homeAboutUs">Years of experience</p>
            </div>
            <div className="col-lg-3 col-6">
              <IoMdHappy size={80} className="icon" color="#fff" />
              <h2 className="homeAboutUsCount">
                {" "}
                <CountUp end={50} redraw={true} duration={1}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span className="serviceCounterNumber" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h2>
              <p className="homeAboutUs">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
