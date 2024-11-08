import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Carousel from "react-multi-carousel";
import Button from "../../../../Components/Button/Button";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../Hooks/useFirebase";

const DetailsOther = () => {
  const { id } = useParams();
  const [others, setOthers] = useState([]);
  const [singleMold, setSingleMold] = useState({});
  const ID = id;

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

  useEffect(() => {
    const foundService = others.find((service) => service.id === ID);
    setSingleMold(foundService);
  }, [ID, others]);
  return (
    <>
      <div className="moldsBannerContainer">
        <BannerTitle title1="Others" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6  animate__animated animate__fadeInLeft">
            <img
              style={{ width: "100%", borderRadius: "20px", height: "600px" }}
              variant="top"
              src={singleMold?.img}
              alt=""
            />
          </div>
          <div className="col-lg-6 mt-3">
            <h1
              style={{
                marginTop: "20px",
                fontWeight: "bold",
              }}>
              {" "}
              {singleMold?.name}
            </h1>
            <hr />
            <p
              style={{
                fontSize: "32px",
                marginTop: "20px",
                textAlign: "left",
              }}>
              {singleMold?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2
          style={{
            fontSize: "55px",
            marginTop: "20px",
            fontWeight: "bold",
          }}>
          Other Products
        </h2>
        <Carousel
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={3000}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover={true}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable>
          {others.map((other) => (
            <div key={other.id}>
              <div className="card h-100 p-3 me-4 mb-5">
                <img src={other.img} alt="" style={{ height: "300px" }} />
                <h6 className="mt-3">{other.name}</h6>

                <Link to={`/machineries/${other.id}`}>
                  <Button
                    title="Details"
                    width="250px"
                    border="2px solid black"
                    color="black"
                    fontSize="20px"
                  />
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default DetailsOther;
