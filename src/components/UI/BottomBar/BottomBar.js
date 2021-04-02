import React from "react";
import styles from "./BottomBar.module.css";

import { FaCalendarPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";

const BottomBar = (props) => {
  return (
    <div className={styles.Wrapper}>
      <button className={styles.BottomBtn}>
        <IoMdSettings className={styles.BottomIcon} />
      </button>
      <button className={styles.BottomBtn} onClick={props.openAddModal}>
        <FaCalendarPlus className={styles.BottomIcon} />
      </button>
      <button className={styles.BottomBtn}>
        <FiLogIn className={styles.BottomIcon} />
      </button>
    </div>
  );
};

export default BottomBar;
