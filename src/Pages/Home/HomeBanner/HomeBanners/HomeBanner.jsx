import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import Button from "../../../../Components/Button/Button";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("HomeBanner.JSON")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return (
    <>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={true}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          {banners.map((banner) => (
            <div key={banner.id}>
              <img src={banner.image} className="bannerImg" alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      {/* <GrFormPrevious
        onClick={prevHandler}
        className="bannerBtnPrev"
        size={50}
        color="#ffff"
      />
      <GrFormNext
        onClick={nextHandler}
        className="bannerBtnNext"
        size={50}
        color="#ffff"
      /> */}
      <div>
        <center className="animate__animated animate__fadeInUp animate__slow bannerTextSection">
          <h2 className="bannerText">
            Welcome To The <br />
            Company
          </h2>
          <Link to="/machineries">
            <Button
              title="Watch More"
              width="300px"
              color="#000"
              border="2px solid"
              fontSize="40px"
            />
          </Link>
        </center>
      </div>
    </>
  );
};

export default HomeBanner;
