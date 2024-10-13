import React from "react";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";
import "./Affiliate.css";
import img from "../../Assets/commingSoon.jpg";

const Affiliate = () => {
  return (
    <>
      <div className="affiliateBannerContainer">
        <BannerTitle title1="Affiliate" title2="Nehal Machinery Ltd" />
      </div>
      <center>
        <img src={img} alt="" style={{ height: "100vh", width: "100%" }} />
      </center>
    </>
  );
};

export default Affiliate;
