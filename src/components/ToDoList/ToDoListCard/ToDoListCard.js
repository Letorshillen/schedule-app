import React from "react";
import styles from "./ToDoListCard.module.css";

const ToDoListCard = (props) => {
  return (
    <div className={styles.ToDoListCard}>
      <h1 onClick={props.openCard}>{props.date}</h1>
      <p>ist vorbei</p>
      <div onClick={props.showDeleteModal} className={styles.deleteCross}></div>
    </div>
  );
};

export default ToDoListCard;
