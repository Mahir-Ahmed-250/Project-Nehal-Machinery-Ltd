import React, { useEffect, useState } from "react";
import "./Machineries.css";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Machinery from "../Machinery/Machinery";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Hooks/useFirebase";
import LoadingSkeleton from "../../../../AdminPannel/Components/LoadingSkeleton/LoadingSkeleton";

const Machineries = () => {
  const [machineries, setMachineries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Machinery"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setMachineries(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <div className="machineryBannerContainer">
        <BannerTitle title1="Machineries" title2="Nehal Machinery Ltd" />
      </div>
      {loading ? (
        <div className="container mt-5">
          <LoadingSkeleton />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
              {machineries
                .sort((a, b) => a.serial - b.serial)
                .map((machinery) => (
                  <Machinery key={machinery.id} machinery={machinery} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Machineries;
