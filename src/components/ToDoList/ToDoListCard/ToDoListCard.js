import React from "react";
import styles from "./ToDoListCard.module.css";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ToDoListCard = (props) => {
  return (
    <div className={styles.ToDoListCard}>
      <div onClick={props.openCard} className={styles.TextWrapper}>
        <h1>
          {props.date1}.{props.date2}
        </h1>
        <AiOutlineInfoCircle className={styles.info} />
      </div>
      <AiFillDelete
        onClick={props.showDeleteModal}
        className={styles.deleteCross}
      />
    </div>
  );
};

export default ToDoListCard;
