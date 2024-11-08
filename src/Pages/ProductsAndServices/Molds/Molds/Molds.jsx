import React, { useEffect, useState } from "react";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Mold from "../Mold/Mold";
import "./Molds.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Hooks/useFirebase";

const Molds = () => {
  const [molds, setMolds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Molds"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setMolds(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <div className="moldsBannerContainer">
        <BannerTitle title1="Molds" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {molds
            .sort((a, b) => a.serial - b.serial)
            .map((mold) => (
              <Mold key={mold.id} mold={mold} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Molds;
