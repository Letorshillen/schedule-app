import styles from "./AddModal.module.css";
import { useState } from "react";

import { FaCalendarCheck } from "react-icons/fa";

const AddModal = (props) => {
  const [date, setDate] = useState("");
  const [activity1, setActivity1] = useState("");
  const [activity2, setActivity2] = useState("");
  const [activity3, setActivity3] = useState("");
  const [activity4, setActivity4] = useState("");
  const [activity5, setActivity5] = useState("");
  const [activity6, setActivity6] = useState("");
  const [activity7, setActivity7] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert("Add Date");
      return;
    }
    props.onAdd({
      date,
      activity1,
      activity2,
      activity3,
      activity4,
      activity5,
      activity6,
      activity7,
      showToDo: false,
      showDeleteModal: false,
    });

    setDate("");
    setActivity1("");
    setActivity2("");
    setActivity3("");
    setActivity4("");
    setActivity5("");
    setActivity6("");
    setActivity7("");
  };

  return props.showAddModal ? (
    <form autoComplete="off" onSubmit={onSubmit} className={styles.AddModal}>
      <div className={styles.Header}>
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
        <h1>Neuer Tag</h1>
      </div>
      <div className={styles.Wrapper}>
        <label>Datum:</label>
        <input
          className={styles.InputDate}
          type="number"
          step="0.01"
          min="1"
          max="31.12"
          name="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <input
          className={styles.InputTime}
          type="number"
          steps="1"
          min="0"
          max="24"
          placeholder="00"
        />
        <span>:</span>
        <input
          className={styles.InputTime}
          type="number"
          steps="1"
          min="0"
          max="59"
          placeholder="00"
        />
        <textarea
          name="activity1"
          value={activity1}
          onChange={(e) => setActivity1(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <label>11 Uhr:</label>
        <textarea
          name="activity2"
          value={activity2}
          onChange={(e) => setActivity2(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <label>13 Uhr:</label>
        <textarea
          name="activity3"
          value={activity3}
          onChange={(e) => setActivity3(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <label>15 Uhr:</label>
        <textarea
          name="activity4"
          value={activity4}
          onChange={(e) => setActivity4(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <label>17 Uhr:</label>
        <textarea
          name="activity5"
          value={activity5}
          onChange={(e) => setActivity5(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <label>19 Uhr:</label>
        <textarea
          name="activity6"
          value={activity6}
          onChange={(e) => setActivity6(e.target.value)}
        />
      </div>

      <div className={styles.Wrapper}>
        <label>21 Uhr:</label>
        <textarea
          name="activity7"
          value={activity7}
          onChange={(e) => setActivity7(e.target.value)}
        />
      </div>

      <button type="submit" value="Submit">
        <FaCalendarCheck className={styles.SubmitBtnIcon} />
      </button>
    </form>
  ) : null;
};

export default AddModal;
