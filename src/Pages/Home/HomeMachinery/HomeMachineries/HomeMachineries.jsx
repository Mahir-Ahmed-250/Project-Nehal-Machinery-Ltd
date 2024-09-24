import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Title/Title";
import { Link } from "react-router-dom";
import HomeMachinery from "../HomeMachinery/HomeMachinery";
import Button from "../../../../Components/Button/Button";

const HomeMachineries = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("HomeMachineries.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Title title="Our Machinery" />
      <div className="container text-left">
        <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000">
          {products.slice(0, 6).map((product) => (
            <HomeMachinery key={product.id} product={product}></HomeMachinery>
          ))}
          <div class="row mt-4">
            <div class="text-center">
              <Link to="/products">
                <Button
                  title="Explore More"
                  width="300px"
                  border="2px solid black"
                  color="black"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMachineries;
