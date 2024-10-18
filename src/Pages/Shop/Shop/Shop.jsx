import React, { useEffect, useState } from "react";
import "./Shop.css";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import SingleShop from "../SingleShop/SingleShop";

const Shop = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);
  return (
    <>
      <div className="shopBannerContainer">
        <BannerTitle title1="Shop" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {shops.map((shop) => (
            <SingleShop key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
