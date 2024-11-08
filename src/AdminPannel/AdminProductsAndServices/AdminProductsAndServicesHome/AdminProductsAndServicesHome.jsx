import React from "react";
import BannerTitle from "../../../Components/BannerTitle/BannerTitle";
import { Link } from "react-router-dom";
import AdminNavigation from "../../Components/AdminNavigation/AdminNavigation";
import image from "../../../Assets/adminproducts.jpeg";
const AdminProductsAndServicesHome = () => {
  return (
    <>
      <div style={{ paddingTop: "12%" }} className="container">
        <BannerTitle title1="Products & Services" />
        <AdminNavigation />
        <div className="adminHomeContainer mb-5">
          <div>
            <img src={image} alt="" width="100%" height="100%" />
          </div>
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-6">
                <Link to="/admin/machinery" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="adminNavigationTitle">Machinery</h2>
                    <h6 className="adminNavigationText">
                      Upload, Edit & Delete Machinery Here
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link to="/admin/mold" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle">Molds</h2>
                    <h6 className="homeNavigationText">
                      Upload, Edit & Delete Molds Here
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6">
                <Link to="/admin/raw" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle">Raw Materials</h2>
                    <h6 className="homeNavigationText">
                      Upload, Edit, Delete Raw Materials Here
                    </h6>
                  </div>
                </Link>
              </div>

              <div className="col-lg-6">
                <Link to="/admin/portfolio" style={{ textDecoration: "none" }}>
                  <div className="adminNavigation">
                    <h2 className="homeNavigationTitle">Others</h2>
                    <h6 className="homeNavigationText">
                      Upload, Edit, Delete Others Here
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductsAndServicesHome;
