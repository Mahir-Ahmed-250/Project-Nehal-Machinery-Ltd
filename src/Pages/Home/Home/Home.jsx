import React from "react";
import HomeBanner from "../HomeBanner/HomeBanners/HomeBanner";
import HomeMachineries from "../HomeMachinery/HomeMachineries/HomeMachineries";
import HomeWhyChooseUs from "../HomeWhyChooseUs/HomeWhyChooseUs";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
// import HomeReviews from "../HomeReview/HomeReviews/HomeReviews";
// import HomeOurCustomers from "../HomeOurCustomers/HomeOurCustomers";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeMachineries />
      <HomeWhyChooseUs />
      <HomeAboutUs />
      {/* <HomeReviews />
      <HomeOurCustomers/> */}
    </>
  );
};

export default Home;
