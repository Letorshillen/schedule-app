import React from "react";
import styles from "./AddBtn.module.css";

import { FaCalendarPlus } from "react-icons/fa";

const AddBtn = (props) => {
  return (
    <button className={styles.AddBtn} onClick={props.openAddModal}>
      <FaCalendarPlus className={styles.AddBtnIcon} />
    </button>
  );
};

export default AddBtn;
