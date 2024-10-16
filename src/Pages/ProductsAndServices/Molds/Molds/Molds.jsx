import React, { useEffect, useState } from "react";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Mold from "../Mold/Mold";
import "./Mold.css";

const Molds = () => {
  const [molds, setMolds] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setMolds(data));
  }, []);

  return (
    <>
      <div className="moldsBannerContainer">
        <BannerTitle title1="Molds" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {molds
            .filter((mold) => mold.category === "electronics")
            .map((mold) => (
              <Mold key={mold.id} mold={mold} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Molds;
