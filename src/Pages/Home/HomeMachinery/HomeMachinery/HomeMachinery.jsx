import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../Components/Button/Button";

const HomeMachinery = ({ product }) => {
  const { id, name, img } = product;
  return (
    <>
      <div className="col-lg-4 mt-4 mb-4 ">
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div
            class="card p-5 text-center shadow"
            style={{ borderRadius: "5%" }}
          >
            <img
              src={img}
              alt="postsImage"
              className="card-img-top"
              style={{ height: "300px" }}
            />

            <div class="card-body">
              <h5 style={{ height: "50px" }}>{name}</h5>
            </div>
            <Link className="mt-4" to={`/machineries/${id}`}>
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

export default HomeMachinery;
