import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./HomeBanner.css";

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
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper">
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              data-aos="fade-in"
              data-aos-duration="10000"
              src={banner.image}
              className="bannerImg"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <GrFormPrevious
        onClick={prevHandler}
        className="bannerBtnPrev"
        size={50}
      />
      <GrFormNext onClick={nextHandler} className="bannerBtnNext" size={50} />
      <center>
        <h2 className="bannerTitle">HELLO</h2>
      </center>
    </>
  );
};

export default HomeBanner;
