import React from "react";
import HomeBanner from "../HomeBanner/HomeBanners/HomeBanner";
import HomeMachineries from "../HomeMachinery/HomeMachineries/HomeMachineries";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeMachineries />
      <WhyChooseUs />
      <HomeAboutUs />
      <HomeReview/>
    </>
  );
};

export default Home;
