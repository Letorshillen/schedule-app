import React from "react";
import styles from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  return (
    <div className={styles.DeleteModal}>
      <p>YOu wanna delete for real</p>
      <div className={styles.DeleteModalInner}>
        <p onClick={props.delete} style={{ color: "red" }}>
          Löschen
        </p>
        <p onClick={props.closeDeleteModal}>Zurück</p>
      </div>
    </div>
  );
};

export default DeleteModal;
