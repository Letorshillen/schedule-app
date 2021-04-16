import React from "react";
import styles from "./BottomBar.module.css";
import { useState } from "react";

import { FaCalendarPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const BottomBar = (props) => {
  const [logoutModal, setLogoutModal] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.Wrapper}>
        <button className={styles.BottomBtn} onClick={props.openSettings}>
          <IoMdSettings className={styles.BottomIcon} />
        </button>
        <button className={styles.BottomBtn} onClick={props.openAddModal}>
          <FaCalendarPlus className={styles.BottomIcon} />
        </button>
        <button className={styles.BottomBtn}>
          <FiLogOut
            className={styles.BottomIcon}
            onClick={() => setLogoutModal(!logoutModal)}
          />
        </button>
      </div>
      {logoutModal ? (
        <>
          <div className={styles.LogoutModal}>
            <p>
              <strong>Wirklich ausloggen</strong>
            </p>
            <div className={styles.LogoutModalInner}>
              <p onClick={props.logout} style={{ color: "red" }}>
                LogOut
              </p>
              <p onClick={() => setLogoutModal(false)}>Zurück</p>
            </div>
          </div>
          <div className={styles.Backdrop}></div>
        </>
      ) : null}
    </React.Fragment>
  );
};

export default BottomBar;
