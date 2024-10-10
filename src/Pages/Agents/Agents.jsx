import React from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import "./Agents.css";
import img from "../../Assets/commingSoon.jpg";

const Agents = () => {
  return (
    <>
      <div className="agentsBannerContainer">
        <BannerTitle title1="Agents" title2="Nehal Machinery Ltd" />
      </div>
      <center>
        <img src={img} alt="" style={{ height: "100vh", width: "100%" }} />
      </center>
    </>
  );
};

export default Agents;
