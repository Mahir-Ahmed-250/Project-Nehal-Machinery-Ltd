import React from "react";
import Title from "../../../Components/Title/Title";
import "./HomeAboutUs.css";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
const HomeAboutUs = () => {
  return (
    <>
      <Title title="About Us" />
      <div className="homeAboutUsBackgroundImage">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-6">
              <div>
                <BiSolidFoodMenu size={80} className="icon" color="#fff" />
                <h2 className="homeAboutUsCount">625+</h2>
                <p className="homeAboutUs">Import Containers/Month</p>
              </div>
            </div>
            <div className="col-lg-3 col-6">
        
              <TbWorld size={80} className="icon" color="#fff" />
              <h2 className="homeAboutUsCount">8
              +</h2>
              <p className="homeAboutUs">Offices In The World</p>
      
            </div>
            <div className="col-lg-3 col-6">
            
              <FaRegClock size={80} className="icon" color="#fff" />
              <h2 className="homeAboutUsCount">10
              +</h2>
              <p className="homeAboutUs">Years of experience</p>
       
            </div>
            <div className="col-lg-3 col-6">
   
              <IoMdHappy size={80} className="icon" color="#fff" />
               <h2 className="homeAboutUsCount">
200
+</h2>
              <p className="homeAboutUs">Happy Clients</p>
   
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;
