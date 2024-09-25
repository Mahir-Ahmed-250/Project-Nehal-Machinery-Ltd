import React, { useEffect, useState } from "react";
import HomeReview from "../HomeReview/HomeReview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeReviews.css";
import Title from "../../../../Components/Title/Title";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("HomeReview.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <Title title="Customer Review" />
      <div className="container review-container">
        <Carousel
          className="container"
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          containerClassName="container-with-dots"
          dotListClassName=""
          infinite
          minimumTouchDrag={80}
          pauseOnHover
          responsive={responsive}
          rewind={false}
          slidesToSlide={1}
          arrows={false}>
          {reviews.map((review) => (
            <HomeReview key={review.id} review={review}></HomeReview>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HomeReviews;
