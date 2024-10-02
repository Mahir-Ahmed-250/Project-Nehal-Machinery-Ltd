import React from 'react';
import styles from './BannerTitle.module.css';

const BannerTitle = ({title}) => {
    return (
      <>
        <h3 className={styles.title}>{title}</h3>
      </>
    );
};

export default BannerTitle;