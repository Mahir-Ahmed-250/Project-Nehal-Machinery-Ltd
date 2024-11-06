import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavigation.css";

const AdminNavigation = () => {
  return (
    <>
      <center className="adminNavContainer container">
        <Link to="/admin" className="adminNav">
          Home
        </Link>
        <Link to="/admin/homeBanner" className="adminNav">
          Home Banner
        </Link>
        <Link to="/admin/products&service" className="adminNav">
          Products & Service
        </Link>
        <Link to="/admin/shop" className="adminNav">
          Shop
        </Link>
        <Link to="/admin/blog" className="adminNav">
          Blog
        </Link>
        <Link to="/admin/aboutUs" className="adminNav">
          About Us
        </Link>
      </center>
    </>
  );
};

export default AdminNavigation;
