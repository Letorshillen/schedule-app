import styles from "./AddModal.module.css";
import { useState } from "react";

const AddModal = (props, { onAdd }) => {
  const [date, setDate] = useState();
  const [activity1, setActivity1] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!date) {
    //   alert("Add Date");
    //   return;
    // }

    onAdd({ date, activity1 });
  };

  return props.showAddModal ? (
    <form onSubmit={onSubmit} className={styles.AddModal}>
      <div onClick={props.closeAddModal} className={styles.Arrow}>
        <svg
          width="29"
          height="24"
          viewBox="0 0 29 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.939338 10.9393C0.353551 11.5251 0.353551 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.939338 10.9393ZM29 10.5L2 10.5V13.5L29 13.5V10.5Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={styles.Wrapper}>
        <label>Datum:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <p>09 Uhr</p>
        <input
          type="text"
          name="activity1"
          value={activity1}
          onChange={(e) => setActivity1(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <p>11 Uhr</p>
        <input type="text" />
      </div>

      <input type="submit" value="Submit"></input>
    </form>
  ) : null;
};

export default AddModal;
