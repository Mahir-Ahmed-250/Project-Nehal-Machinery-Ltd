import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import Button from "../../../../Components/Button/Button";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { db } from "../../../../Hooks/useFirebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const HomeBanner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "HomeBanner"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setBanners(list);
      setLoading(false);
      console.log(banners);
    });
    return bannerListenerSubscription;
  }, []);

  return (
    <>
      {loading ? (
        <center className="loader">
          <div className="loaderContainer ">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </center>
      ) : (
        <>
          {" "}
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}>
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerclassName=""
              dotListclassName=""
              draggable
              focusOnSelect={false}
              infinite
              itemclassName=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={true}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderclassName=""
              slidesToSlide={1}
              swipeable>
              {banners.map((banner) => (
                <div key={banner.id}>
                  <img src={banner.img} className="bannerImg" alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <center className="animate__animated animate__fadeInUp animate__slow bannerTextSection">
              <h2 className="bannerText">
                Welcome to <br />
                Nehal Machinery Limited
              </h2>
              <Link to="/machineries">
                <Button
                  title="Watch More"
                  width="300px"
                  color="#000"
                  border="2px solid"
                  fontSize="40px"
                />
              </Link>
            </center>
          </div>
        </>
      )}
    </>
  );
};

export default HomeBanner;
