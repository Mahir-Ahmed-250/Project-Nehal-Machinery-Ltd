import React, { useEffect, useState } from "react";
import HomeReview from "../HomeReview/HomeReview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeReviews.css";
import Title from "../../../../Components/Title/Title";
import { Button, Modal } from "react-bootstrap";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    fetch("HomeReview.JSON")
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
      <div className="container pt-4 pb-4">
        <Button
          variant="success"
          className="float-right"
          onClick={() => setModalShow(true)}>
          Write a Review
        </Button>
      </div>
      <div className="container review-container">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
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
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
