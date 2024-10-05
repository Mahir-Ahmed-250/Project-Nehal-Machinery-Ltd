import { useState } from "react";
import Button from "../../../Components/Button/Button";

const SingleBlog = ({ post }) => {
  const { title, image, description } = post;
  const [showFullDescription, setFullDescription] = useState(false);
  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  const postDescription = showFullDescription
    ? description
    : description.slice(0, 120);

  return (
    <>
      <div
        className="col-md-6 col-lg-4 mt-4 mb-4"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000">
        <div className="card">
          <img src={image} className="card-img-top" alt="postsImage" />
          <div className="card-body" style={{ backgroundColor: "#f4f4f4" }}>
            <h5 className="card-title blog-title">{title}</h5>
            <h6 className="blog-post-description">
              {postDescription}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={showFullDescriptionHandler}>
                {showFullDescription ? "  Show Less" : "  ...Show More"}
              </span>
            </h6>
            <Button
              title="Read More"
              width="200px"
              border="2px solid black"
              color="black"
              fontSize="20px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
