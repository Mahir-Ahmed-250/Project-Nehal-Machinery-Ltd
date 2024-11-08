import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../Components/Button/Button";

const Machinery = ({ machinery }) => {
  const { id, name, img } = machinery;
  return (
    <>
      <div
        className="col-lg-6 mt-4 mb-4 "
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000">
        <div
          className="card h-100 p-4 shadow text-center"
          style={{ borderRadius: "3%" }}>
          <img src={img} alt="postsImage" style={{ height: "300px" }} />
          <div className="card-body">
            <h5 className="card-name blog-name">{name}</h5>
          </div>

          <div className="mx-auto mb-4">
            <Link to={`/machineries/${id}`}>
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

export default Machinery;
