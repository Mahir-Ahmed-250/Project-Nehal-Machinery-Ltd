import React from 'react';
import BannerTitle from '../../Components/BannerTitle/BannerTitle';
import './AboutUs.css';
import HomeAboutUs from '../Home/HomeAboutUs/HomeAboutUs';

const AboutUs = () => {
    return (
        <>
      <div className="aboutUsBannerContainer">
        <BannerTitle
          title1="About Us"
          title2="Nehal Machinery Ltd"
        />
      </div>
      <div className="container">
        <h5 className="messageChairman">
        Nehal Machinery Ltd has been working in Plastics/Polymer field since 2021 and plays a pivotal role in plastics process equipment industry as well as it’s the joint stock registered company. To provide top quality products and excellent technical services is its long-term commitments to all the loyal customers. 
Our Scope- Injection Molding Machine, Extrusion Line, Different Kinds of Molds, All Kinds of Auxiliary Machine (Overhead Crane, High Speed Mixer,  Hopper Dryer, Auto Loader, Chiller, Crusher, Cooling Tower, Color Mixer, Dehumidifier, Screw & Barrel), Powder and Granule Material Handling Automation, Pipe/Fittings Belling Machine, Pipe Thread Cutting Machine, Film Blown Machine, Stretch Blown Molding Machine, PET Blown Machine, Extrusion Blown Machine, Shrink Wrapping Machine, Date Code Printing Machine, Thermoforming Machine, Packaging Machine, Water Treatment Plant, Industrial HVLS Fan etc. We have very good professional supplier who are specially make themselves machine. In addition, For individual machine we have individual supplier.
A technology oriented Company, Nehal Machinery Ltd. is known for supplying world-class Plastic Processing Machineries & others industrial equipment
Great to the very valued and esteemed customers from all over the country please allow us to prove to you that “Nehal Machinery Ltd” can be your best source of buying plastics machineries. Our company is designed with expert team including engineers who are always ready to serve the requirements.
We always keep our promises to keep a good and long term business relationship to our customers all over the country.

        </h5>
        <HomeAboutUs/>
      </div>
    </>
    );
};

export default AboutUs;