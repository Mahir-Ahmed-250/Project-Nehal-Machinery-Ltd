import React, { useEffect, useState } from 'react';
import Title from '../../../Components/Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeOurCustomers.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
const HomeOurCustomers = () => {
    const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("HomeOurCustomer.JSON")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
    return (
        <div>
            <Title title="Our Valued Customers"/>
            <center className="container">
            <Swiper
      slidesPerView={3}
      spaceBetween={30}

      loop={true}
      loopFillGroupWithBlank={true}
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
          depth: 100,
          modifier: 3.5,
          slideShadows: true
      }}
      pagination={{
          clickable: true
      }}
      onPaginationShow={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
     
      >
   
          
            {customers.map((customer) => (
                <SwiperSlide key={customer.id}>
                  <img src={customer.image} height="300px" alt="" />
                </SwiperSlide>
              ))}
          
    
      </Swiper>
            </center>
        
        </div>
    );
};

export default HomeOurCustomers;