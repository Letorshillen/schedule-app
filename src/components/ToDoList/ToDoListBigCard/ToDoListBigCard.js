import React from "react";
import styles from "./ToDoListBigCard.module.css";

const ToDoListBigCard = (props) => {
  return (
    <div className={styles.ToDoListBigCard}>
      <h1>{props.date}</h1>
      {props.tasks.map((task, index) => {
        return (
          <div key={index} className={styles.TimeTextContainer}>
            <h2>
              {task.time1}:{task.time2}
            </h2>
            <p>{task.activity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoListBigCard;
