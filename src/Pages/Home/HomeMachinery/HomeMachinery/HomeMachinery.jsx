import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../../../Components/Button/Button";

const HomeMachinery = ({ product }) => {
  const { id, title, image } = product;
  return (
    <div className="col-md-6 col-lg-4 mt-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Img src={image} alt="" style={{ height: "400px" }} />
          <h5 className="mt-3">{title}</h5>
        </Card.Body>
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
      </Card>
    </div>
  );
};

export default HomeMachinery;
