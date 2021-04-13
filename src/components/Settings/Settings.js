import React from "react";
import styles from "./Settings.module.css";

const Settings = (props) => {
  return props.show ? (
    <div className={styles.Wrapper}>
      <h1>Settings</h1>
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={props.changeBackground}
      />
      <p>Hintergrundbild</p>
      <p>Hintergrundbild</p>
      <p>Hintergrundbild</p>
    </div>
  ) : null;
};

export default Settings;
