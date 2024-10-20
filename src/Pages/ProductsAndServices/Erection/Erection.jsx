import React from "react";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import img from "../../../Assets/commingSoon.jpg";

const Erection = () => {
  return (
    <>
      <div className="machineryBannerContainer">
        <BannerTitle title1="Erection" title2="Nehal Machinery Ltd" />
      </div>
      <center>
        <img src={img} alt="" style={{ height: "100vh", width: "100%" }} />
      </center>
    </>
  );
};

export default Erection;
