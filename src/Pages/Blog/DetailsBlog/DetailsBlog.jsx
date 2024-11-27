import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import Carousel from "react-multi-carousel";
import Button from "../../../Components/Button/Button";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";

const DetailsBlog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState({});
  const ID = id;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //create the query
    const q = query(collection(db, "Blog"));
    //create listener
    const bannerListenerSubscription = onSnapshot(q, (querySnapShot) => {
      const list = [];
      querySnapShot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(list);
      setLoading(false);
    });
    return bannerListenerSubscription;
  }, []);
  useEffect(() => {
    const foundService = blogs.find((service) => service.id === ID);
    setSingleBlog(foundService);
  }, [ID, blogs]);

  return (
    <>
      <div className="blogBannerContainer">
        <BannerTitle title1="Blog" title2="Nehal Machinery Ltd" />
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
          <div className="col-lg-6">
            <h1
              style={{
                fontSize: "55px",

                fontWeight: "bold",
              }}
              className="treatment">
              {" "}
              {singleBlog?.name}
            </h1>
            <p style={{ textAlign: "justify" }}>{singleBlog?.description}</p>
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
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
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
          sliderclassName=""
          slidesToSlide={1}
          swipeable>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div className="card p-3 me-4 mb-5">
                <img
                  src={blog.img}
                  className="bannerImg"
                  alt=""
                  style={{ height: "300px" }}
                />
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
