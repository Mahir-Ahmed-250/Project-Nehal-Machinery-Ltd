import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./HomeBanner.css";
import Button from "../../../../Components/Button/Button";

const HomeBanner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("HomeBanner.json")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <>
      <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        effect={"fade"}
        spaceBetween={50}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper">
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.image} className="bannerImg" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <GrFormPrevious
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
      />
      <div>
        <center className="animate__animated animate__fadeInUp animate__slow bannerTextSection">
          <h2 className="bannerText">
            Welcome To The <br />
            Company
          </h2>
          <Button title="Watch More" width="350px" color="#000" border="2px solid"/>
         
        </center>
      </div>
    </>
  );
};

export default HomeBanner;
