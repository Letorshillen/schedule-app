import React from "react";
import styles from "./ToDoListCard.module.css";

const ToDoListCard = (props) => {
  return (
    <div className={styles.ToDoListCard}>
      <div onClick={props.openCard} className={styles.TextWrapper}>
        <h1>{props.date}</h1>
        <p>...</p>
      </div>
      <div onClick={props.showDeleteModal} className={styles.deleteCross}></div>
    </div>
  );
};

export default ToDoListCard;
