import React from "react";
import image from "../../Assets/dashboard.png";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import AdminNavigation from "../Components/AdminNavigation/AdminNavigation";
import BannerTitle from "../../Components/BannerTitle/BannerTitle";

const AdminHome = () => {
  return (
    <div>
      <div className="container " style={{ paddingTop: "10%" }}>
        <BannerTitle
          title1="Welcome to Admin Dashboard"
          title2="Nehal Machinery Ltd"
        />
        <AdminNavigation />
        <div className="adminHomeContainer">
          <div>
            <img src={image} alt="" width="100%" height="100%" />
          </div>
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-6">
                <Link to="/admin/homeBanner" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="adminNavigationTitle">Home Banner</h2>
                    <h5 className="adminNavigationText">
                      Upload & Delete Home Banner Here
                    </h5>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link to="/admin/homeBanner" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle">Products & Services</h2>
                    <h5 className="homeNavigationText">
                      Upload & Delete Products & Services Here
                    </h5>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link
                  to="/admin/homePortfolio"
                  style={{ textDecoration: "none" }}
                >
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle">Shop</h2>
                    <h5 className="homeNavigationText">
                      Upload, Edit, Delete Shop Here
                    </h5>
                  </div>
                </Link>
              </div>

              <div className="col-lg-6">
                <Link to="/admin/portfolio" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle">Blog</h2>
                    <h5 className="homeNavigationText">
                      Upload, Edit, Delete Blog Here
                    </h5>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/admin/counter" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle"> About Us</h2>
                    <h5 className="homeNavigationText">Update About Us Here</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
