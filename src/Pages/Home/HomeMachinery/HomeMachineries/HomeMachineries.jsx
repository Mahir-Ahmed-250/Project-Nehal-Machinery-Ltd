import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Title/Title";
import { Link } from "react-router-dom";
import HomeMachinery from "../HomeMachinery/HomeMachinery";
import Button from "../../../../Components/Button/Button";
import "./HomeMachineries.css";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Hooks/useFirebase";

const HomeMachineries = () => {
  const [products, setProducts] = useState([]);

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
      setProducts(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);

  return (
    <div className="gg">
      <Title title="Our Machineries" />
      <div className="container text-left">
        <div className="row mt-3" data-aos="fade-up" data-aos-duration="1000">
          {products.slice(0, 6).map((product) => (
            <HomeMachinery key={product.id} product={product}></HomeMachinery>
          ))}
          <div className="row mt-4">
            <div className="text-center">
              <Link to="/machineries">
                <Button
                  title="Explore More"
                  width="300px"
                  border="2px solid black"
                  color="black"
                  fontSize="30px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMachineries;
