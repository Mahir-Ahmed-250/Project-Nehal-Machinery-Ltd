import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import Carousel from "react-multi-carousel";
import Button from "../../../Components/Button/Button";

const DetailsShop = () => {
  const { id } = useParams();
  const [shops, setShops] = useState([]);
  const [singleShop, setSingleShop] = useState({});
  const ID = parseInt(id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setShops(data));
  }, []);

  useEffect(() => {
    const foundService = shops.find((service) => service.id === ID);
    setSingleShop(foundService);
  }, [ID, shops]);
  return (
    <>
      <div className="shopBannerContainer">
        <BannerTitle title1="Shop" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6  animate__animated animate__fadeInLeft">
            <img
              style={{ width: "100%", borderRadius: "20px", height: "600px" }}
              variant="top"
              src={singleShop?.image}
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
              {singleShop?.title}
            </h1>
            <hr />
            <p
              style={{
                fontSize: "32px",
                marginTop: "20px",
                textAlign: "left",
              }}>
              {singleShop?.description}
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
          Related Products
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
          itemClass=""
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
          {shops.map((machinery) => (
            <div key={machinery.id}>
              <div className="card h-100 p-3 me-4 mb-5">
                <img src={machinery.image} alt="" style={{ height: "300px" }} />
                <h6 className="mt-3">
                  {`${machinery.title}`.slice(0, 12)}....
                </h6>

                <Link to={`/machineries/${machinery.id}`}>
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
export default DetailsShop;
