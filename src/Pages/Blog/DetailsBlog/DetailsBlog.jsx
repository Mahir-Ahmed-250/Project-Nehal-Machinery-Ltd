import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";

const DetailsBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [singleBlog, setSingleBlog] = useState({});
  const ID = parseInt(id);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahir-Ahmed-250/API/gh-pages/Data.json"
    )
      .then((res) => res.json())
      .then((data) => setBlog(data));
  });

  useEffect(() => {
    const foundService = blog.find((service) => service.id === ID);
    setSingleBlog(foundService);
  }, [ID, blog]);
  return (
    <>
      <div className="blogBannerContainer">
        <BannerTitle
          title1={`Blog Name - ${singleBlog?.name}`}
          title2="Nehal Machinery Ltd"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-3">
            <Card className="card animate__animated animate__fadeInLeft">
              <Card.Img
                style={{ width: "100%" }}
                variant="top"
                src={singleBlog?.img}
              />
              <Card.Body>
                <h5 className="treatment"> {singleBlog?.name}</h5>
                <h6 className="price">Price: ${singleBlog?.price}</h6>
                <p>{singleBlog?.description}</p>
                <h6 className="doctor">
                  Specialized Doctor : {singleBlog?.doctor}
                </h6>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBlog;
