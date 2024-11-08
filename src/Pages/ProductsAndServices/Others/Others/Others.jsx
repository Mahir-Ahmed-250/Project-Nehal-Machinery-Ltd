import React, { useEffect, useState } from "react";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Other from "../Other/Other";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Hooks/useFirebase";

const Others = () => {
  const [others, setOthers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Others"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setOthers(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <div className="moldsBannerContainer">
        <BannerTitle title1="Others" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {others
            .sort((a, b) => a.serial - b.serial)
            .map((other) => (
              <Other key={other.id} other={other} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Others;
