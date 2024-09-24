import React from "react";
import HomeBanner from "../HomeBanner/HomeBanners/HomeBanner";
import HomeMachineries from "../HomeMachinery/HomeMachineries/HomeMachineries";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeMachineries />
      <WhyChooseUs />
      <HomeAboutUs />
    </>
  );
};

export default Home;
