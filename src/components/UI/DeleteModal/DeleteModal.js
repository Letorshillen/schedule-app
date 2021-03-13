import React from "react";
import styles from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  return (
    <div className={styles.DeleteModal}>
      <p>
        <strong>You wanna delete for real?</strong>
      </p>
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
