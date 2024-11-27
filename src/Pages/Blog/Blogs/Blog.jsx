import React, { useEffect, useState } from "react";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import "./Blog.css";
import SingleBlog from "../SingleBlog/SingleBlog";
import Button from "../../../Components/Button/Button";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../Hooks/useFirebase";
import LoadingSkeleton from "../../../AdminPannel/Components/LoadingSkeleton/LoadingSkeleton";

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

  const [blogs, setBlogs] = useState([]);
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
  return (
    <>
      <div className="blogBannerContainer">
        <BannerTitle title1="Blog" title2="Nehal Machinery Ltd" />
      </div>
      {loading ? (
        <div className="container mt-5">
          <LoadingSkeleton />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
              {blogs.slice(0, visible).map((blog) => (
                <SingleBlog key={blog.id} blog={blog} />
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
      )}
    </>
  );
};

export default Blog;
