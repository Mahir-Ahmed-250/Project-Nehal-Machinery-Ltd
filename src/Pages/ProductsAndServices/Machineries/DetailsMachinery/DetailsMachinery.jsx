import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../../../Components/BannerTitle/BannerTitle";
import Button from "../../../../Components/Button/Button";
import Carousel from "react-multi-carousel";

const DetailsMachinery = () => {
  const { id } = useParams();
  const [machineries, setMachineries] = useState([]);
  const [singleMachinery, setSingleMachinery] = useState({});
  const ID = parseInt(id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setMachineries(data));
  }, []);

  useEffect(() => {
    const foundService = machineries.find((service) => service.id === ID);
    setSingleMachinery(foundService);
  }, [ID, machineries]);
  return (
    <>
      <div className="machineryBannerContainer">
        <BannerTitle
          title1={`${singleMachinery?.title}`}
          title2="Nehal Machinery Ltd"
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6  animate__animated animate__fadeInLeft">
            <img
              style={{ width: "100%", borderRadius: "20px", height: "300px" }}
              variant="top"
              src={singleMachinery?.image}
              alt=""
            />
          </div>
          <div className="col-lg-6 mt-3">
            <h1
              style={{
                fontSize: "55px",
                marginTop: "20px",
                fontWeight: "bold",
              }}
              className="treatment">
              {" "}
              {singleMachinery?.name}
            </h1>
            <h6 className="price">Price: ${singleMachinery?.price}</h6>
            <p>{singleMachinery?.description}</p>
            <h6 className="doctor">
              Specialized Doctor : {singleMachinery?.doctor}
            </h6>
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
          Related Machinery
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
          {machineries
            .filter((machinery) => machinery.category === "jewelery")
            .map((machinery) => (
              <div key={machinery.id}>
                <div className="card h-100 p-3 me-4 mb-5">
                  <img
                    src={machinery.image}
                    alt=""
                    style={{ height: "300px" }}
                  />
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

export default DetailsMachinery;
