import React, { useEffect, useState } from "react";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import "./RawMaterials.css";
import RawMaterial from "../RawMaterial/RawMaterial";

const RawMaterials = () => {
  const [molds, setMolds] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setMolds(data));
  }, []);

  return (
    <>
      <div className="rawMaterialsBannerContainer">
        <BannerTitle title1="Raw Materials" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {molds
            .filter((mold) => mold.category === "women's clothing")
            .map((mold) => (
              <RawMaterial key={mold.id} mold={mold} />
            ))}
        </div>
      </div>
    </>
  );
};

export default RawMaterials;
