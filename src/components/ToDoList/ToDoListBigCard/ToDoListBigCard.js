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
      <div className={styles.TimeTextContainer}>
        <h2>15:00</h2>
        <p>{props.activity4}</p>
      </div>
      <div className={styles.TimeTextContainer}>
        <h2>17:00</h2>
        <p>{props.activity5}</p>
      </div>
      <div className={styles.TimeTextContainer}>
        <h2>19:00</h2>
        <p>{props.activity6}</p>
      </div>
      <div className={styles.TimeTextContainer}>
        <h2>21:00</h2>
        <p>{props.activity7}</p>
      </div>
    </div>
  );
};

export default ToDoListBigCard;
