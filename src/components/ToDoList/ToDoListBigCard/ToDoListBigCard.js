import React from "react";
import styles from "./ToDoListBigCard.module.css";

const ToDoListBigCard = (props) => {
  return (
    <div className={styles.ToDoListBigCard}>
      <h1>{props.date}</h1>
      {props.activity.map((_, i) => {
        return (
          <div key={i} className={styles.TimeTextContainer}>
            <h2>
              {props.time1[i]}:{props.time2[i]}
            </h2>
            <p>{props.activity[i]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoListBigCard;
