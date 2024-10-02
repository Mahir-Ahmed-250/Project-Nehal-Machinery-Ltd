import React from "react";
import styles from "./BannerTitle.module.css";

const BannerTitle = ({ title1, title2 }) => {
  return (
    <>
      <h3 className={styles.title1}>{title1}</h3>
      <h5 className={styles.title2}>{title2}</h5>
    </>
  );
};

export default BannerTitle;
