import { useState } from "react";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const { id, name, img, description } = blog;
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
          <img src={img} alt="postsImage" style={{ height: "300px" }} />
          <div className="card-body " style={{ backgroundColor: "#f4f4f4" }}>
            <h3 className="card-title blog-title" style={{ fontSize: "25px" }}>
              {name}
            </h3>
            <h6 className="blog-blog-description">
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
            <div className="mt-auto">
              <Link to={`/blog/${id}`}>
                <Button
                  title="Read More"
                  width="200px"
                  border="2px solid black"
                  color="black"
                  fontSize="20px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
