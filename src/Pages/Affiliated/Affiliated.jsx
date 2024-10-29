import React from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import "./Affiliated.css";
import img from "../../Assets/commingSoon.jpg";

const Affiliated = () => {
  return (
    <>
      <div className="affiliateBannerContainer">
        <BannerTitle title1="Affiliated" title2="Nehal Machinery Ltd" />
      </div>
      <center>
        <img src={img} alt="" style={{ height: "100vh", width: "100%" }} />
      </center>
    </>
  );
};

export default Affiliated;
