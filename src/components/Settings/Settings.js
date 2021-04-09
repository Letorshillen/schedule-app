import React from "react";
import styles from "./Settings.module.css";

const Settings = (props) => {
  return props.show ? (
    <div className={styles.Wrapper}>
      <h1>Settings</h1>
      <input
        type="file"
        name="file"
        onChange={(e) => props.changeBackground(e)}
      />
      <p>Hintergrundbild</p>
      <p>Hintergrundbild</p>
      <p>Hintergrundbild</p>
    </div>
  ) : null;
};

export default Settings;
