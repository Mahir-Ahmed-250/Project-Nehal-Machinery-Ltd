import React, { useEffect, useState } from "react";
import HomeReview from "../HomeReview/HomeReview";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeReviews.css";
import Title from "../../../../Components/Title/Title";
import { Button, Form, Modal } from "react-bootstrap";
import toast from "react-hot-toast";

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
          onClick={() => setModalShow(true)}
        >
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
          arrows={false}
        >
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
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");

  const [baseImage, setBaseImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !designation || !comments || !baseImage) {
      setMessage("Please fill in all fields.");

      return;
    }

    // Handle form submission (e.g., send data to an API)
    toast.success("Review submitted successfully!", { duration: 4000 });
    // Reset form
    setName("");
    setDesignation("");
    setComments("");
    setBaseImage("");
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write a Review About Us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" required>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3" controlId="formName" required>
            <Form.Label>Designation & Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Designation & Company"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mt-3" controlId="formComments">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              cols="20"
              Write
              a
              Review
              About
              Us
              placeholder="Write your review"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          <Form.Group className="mt-3">
            <Form.Label>Upload Your Image:</Form.Label>
            <input
              onChange={uploadImage}
              type="file"
              id="img"
              name="img"
              accept="image/*"
              required
              title=" "
              style={{
                display: "block",
                marginBottom: "10px",
                color: "transparent",
              }}
            />
            {baseImage && (
              <img
                src={baseImage}
                height="100px"
                width="100px"
                alt="Uploaded"
                style={{ borderRadius: "50%", marginTop: "10px" }}
              />
            )}
          </Form.Group>
          <br />
          <br />
          <Button variant="success" type="submit">
            Submit Review
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
