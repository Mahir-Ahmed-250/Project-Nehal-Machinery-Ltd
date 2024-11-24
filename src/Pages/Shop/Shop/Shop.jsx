import React, { useEffect, useState } from "react";
import "./Shop.css";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import SingleShop from "../SingleShop/SingleShop";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";
import LoadingSkeleton from "../../../AdminPannel/Components/LoadingSkeleton/LoadingSkeleton";

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Shops"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setShops(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);

  return (
    <>
      <div className="shopBannerContainer">
        <BannerTitle title1="Shop" title2="Nehal Machinery Ltd" />
      </div>
      {loading ? (
        <div className="container mt-4">
          <LoadingSkeleton />
        </div>
      ) : (
        <>
          {" "}
          <div className="container">
            <div className="row">
              {shops.map((shop) => (
                <SingleShop key={shop.id} shop={shop} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
