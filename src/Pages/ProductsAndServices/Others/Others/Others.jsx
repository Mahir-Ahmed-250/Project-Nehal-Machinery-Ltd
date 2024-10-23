import React, { useEffect, useState } from "react";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Other from "../Other/Other";

const Others = () => {
  const [molds, setMolds] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setMolds(data));
  }, []);
  return (
    <>
      <div className="moldsBannerContainer">
        <BannerTitle title1="Others" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {molds
            .filter((mold) => mold.category === "men's clothing")
            .map((mold) => (
              <Other key={mold.id} mold={mold} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Others;
