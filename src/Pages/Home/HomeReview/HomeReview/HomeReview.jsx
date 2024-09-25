import React from "react";

const HomeReview = ({ review }) => {
  const { name, img, testimonial, occupation } = review;
  return (
    <div>
      <div
        className="m-5"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000">
        <center>
          <img src={img} alt="" />
        </center>
        <p className="testimonial-name-occupation">
          {" "}
          <span className="testimonial-name">{name}</span>
          <span className="ms-1">|</span>{" "}
          <span className="ms-2 ">{occupation} </span>
        </p>
        <center>
          <div className="testimonial-line"></div>
        </center>
        <p className="testimonial">{testimonial}</p>
      </div>
    </div>
  );
};

export default HomeReview;
