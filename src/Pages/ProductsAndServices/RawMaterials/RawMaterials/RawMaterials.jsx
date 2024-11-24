import React, { useEffect, useState } from "react";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import "./RawMaterials.css";
import RawMaterial from "../RawMaterial/RawMaterial";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Hooks/useFirebase";
import LoadingSkeleton from "../../../../AdminPannel/Components/LoadingSkeleton/LoadingSkeleton";

const RawMaterials = () => {
  const [rawMaterials, setRawMaterials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "RawMaterials"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setRawMaterials(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  return (
    <>
      <div className="rawMaterialsBannerContainer">
        <BannerTitle title1="Raw Materials" title2="Nehal Machinery Ltd" />
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
              {rawMaterials
                .sort((a, b) => a.serial - b.serial)
                .map((rawMaterial) => (
                  <RawMaterial key={rawMaterial.id} rawMaterial={rawMaterial} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RawMaterials;
