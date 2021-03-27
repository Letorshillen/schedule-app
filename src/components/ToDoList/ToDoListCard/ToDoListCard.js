import React from "react";
import styles from "./ToDoListCard.module.css";
import { AiFillDelete } from "react-icons/ai";

const ToDoListCard = (props) => {
  return (
    <div className={styles.ToDoListCard}>
      <div onClick={props.openCard} className={styles.TextWrapper}>
        <h1>{props.date}</h1>
        <p>...</p>
      </div>
      <AiFillDelete
        onClick={props.showDeleteModal}
        className={styles.deleteCross}
      />
    </div>
  );
};

export default ToDoListCard;
