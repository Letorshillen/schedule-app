import React from "react";
import styles from "./ToDoListBigCard.module.css";

const ToDoListBigCard = (props) => {
  return (
    <div className={styles.ToDoListBigCard}>
      <h1>{props.date}</h1>
      <div className={styles.TimeTextContainer}>
        <h2>09:00</h2>
        <p>{props.activity1}</p>
      </div>
      <div className={styles.TimeTextContainer}>
        <h2>11:00</h2>
        <p>{props.activity2}</p>
      </div>
      <div className={styles.TimeTextContainer}>
        <h2>13:00</h2>
        <p>{props.activity3}</p>
      </div>
    </div>
  );
};

export default ToDoListBigCard;
