import React, { useEffect, useState } from "react";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import "./Blog.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import Button from "../../../Components/Button/Button";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + 3);
  };
  const showLessItems = () => {
    setVisible(3);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    showLessItems();
    setTimeout(scrollToTop, 0);
  };
  useEffect(() => {
    fetch("Blogs.JSON")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className="blogBannerContainer">
        <BannerTitle title1="Blog" title2="Nehal Machinery Ltd" />
      </div>
      <div className="container">
        <div className="row">
          {posts.slice(0, visible).map((post) => (
            <SingleBlog key={post.id} post={post} />
          ))}
        </div>
        <div className="m-4">
          {(posts || []).length > visible && (
            <div className="col-md-12  text-center">
              <Button
                onClick={showMoreItems}
                title="Load More"
                width="300px"
                border="2px solid black"
                color="black"
                fontSize="30px"
              />
            </div>
          )}

          {(posts || []).length < visible + 1 && (
            <div className="col-md-12 text-center">
              <Button
                onClick={handleClick}
                title="Load Less"
                width="300px"
                border="2px solid black"
                color="black"
                fontSize="30px"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
