import React from "react";
import styles from "./Settings.module.css";
import { MdWallpaper } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Settings = (props) => {
  return props.show ? (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h2>Einstellungen</h2>
        <IoMdClose onClick={props.closeSettings} className={styles.Close} />
      </div>

      <div className={styles.Flex}>
        <MdWallpaper className={styles.Icon} />
        <h3>Hintergrundbild</h3>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={props.changeBackground}
        />
      </div>
    </div>
  ) : null;
};

export default Settings;
