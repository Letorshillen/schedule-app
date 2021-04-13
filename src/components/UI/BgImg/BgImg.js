import React from "react";
import styles from "./BgImg.module.css";

const BgImg = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={styles.Image}
    ></div>
  );
};

export default BgImg;
