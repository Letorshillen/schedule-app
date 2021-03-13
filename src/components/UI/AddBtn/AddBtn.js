import React from "react";
import styles from "./AddBtn.module.css";

const AddBtn = (props) => {
  return (
    <button className={styles.AddBtn} onClick={props.openAddModal}>
      Add
    </button>
  );
};

export default AddBtn;
