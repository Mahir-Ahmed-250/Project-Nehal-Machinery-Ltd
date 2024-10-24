import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../Components/Button/Button";

const Other = ({ mold }) => {
  const { id, title, image } = mold;
  return (
    <>
      <div
        className="col-lg-6 mt-4 mb-4 "
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000">
        <div className="card h-100 p-4 shadow" style={{ borderRadius: "8%" }}>
          <img src={image} alt="postsImage" style={{ height: "300px" }} />
          <div className="card-body ">
            <h5 className="card-title blog-title">{title}</h5>
          </div>

          <div className="mx-auto mb-4">
            <Link to={`/others/${id}`}>
              <Button
                title="Details"
                width="200px"
                border="2px solid black"
                color="black"
                fontSize="20px"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
