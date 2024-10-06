import React, { useEffect, useState } from "react";
import Title from "../../../Components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeOurCustomers.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
const HomeOurCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("HomeOurCustomer.JSON")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  return (
    <div>
      <Title title="Our Valued Customers" />
      <div className="container homeCustomerContainer">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={false}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          effect={"coverflow"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlidesBounds={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 0,
            modifier: 3.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper">
          {customers.map((customer) => (
            <SwiperSlide key={customer.id}>
              <img src={customer.image} height="300px" width="100%" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeOurCustomers;
