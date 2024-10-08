import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import Carousel from "react-multi-carousel";
import Button from "../../../Components/Button/Button";

const DetailsBlog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState({});
  const ID = parseInt(id);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahir-Ahmed-250/API/gh-pages/Data.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const foundService = blogs.find((service) => service.id === ID);
    setSingleBlog(foundService);
  }, [ID, blogs]);

  return (
    <>
      <div className="blogBannerContainer">
        <BannerTitle
          title1={`Blog Name - ${singleBlog?.name}`}
          title2="Nehal Machinery Ltd"
        />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6  animate__animated animate__fadeInLeft">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              variant="top"
              src={singleBlog?.img}
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
              {singleBlog?.name}
            </h1>
            <h6 className="price">Price: ${singleBlog?.price}</h6>
            <p>{singleBlog?.description}</p>
            <h6 className="doctor">
              Specialized Doctor : {singleBlog?.doctor}
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
          Related Blogs
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
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div className="card p-3 me-4 mb-5">
                <img src={blog.img} className="bannerImg h-100" alt="" />
                <h3 className="ms-3 mt-3">{blog.name}</h3>
                <div className="mt-auto ms-3 mb-3">
                  <Link to={`/blog/${blog.id}`}>
                    <Button
                      title="Read This Blog"
                      width="250px"
                      border="2px solid black"
                      color="black"
                      fontSize="20px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default DetailsBlog;
