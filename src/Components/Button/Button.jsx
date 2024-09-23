import React from 'react';
import styles from "./Button.module.css";

const Button = ({title, width, border, color}) => {
    return (
        <>
              <button className={styles.btn} style={{width:`${width}`, border:`${border}`, color:`${color}`}}>{title}</button>
        </>
    );
};

export default Button;