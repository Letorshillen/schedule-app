import styles from "./AddModal.module.css";
import { useState } from "react";

import { FaCalendarCheck } from "react-icons/fa";

const AddModal = (props) => {
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState([]);
  const [time1, setTime1] = useState([]);
  const [time2, setTime2] = useState([]);
  const [inputFields, setFields] = useState(2);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert("Add Date");
      return;
    }
    props.onAdd({
      date,
      activity,
      time1,
      time2,
      showToDo: false,
      showDeleteModal: false,
    });

    setDate("");
    setActivity("");
    setTime1("");
    setTime2("");
  };

  const addInputLine = () => {
    setFields(inputFields + 1);
  };

  const handleTime1 = (i, e) => {
    setTime1(...time1, e.target.value[i]);
  };

  let inputs = [];
  for (let i = 0; i < inputFields; i++) {
    inputs.push(
      <div key={i} className={styles.Wrapper}>
        <input
          type="number"
          step="1"
          min="0"
          max="24"
          name={time1[i]}
          value={time1[i]}
          required
          onChange={() => handleTime1}
        />
        :
        <input
          type="number"
          step="1"
          min="0"
          max="24"
          name={time2[i]}
          value={time2[i]}
          // required
          onChange={(e) => setTime2(e.target.value[i])}
        />
        <textarea
          name={activity[i]}
          value={activity[i]}
          onChange={(e) => setActivity(e.target.value[i])}
        />
      </div>
    );
  }

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
      {inputs}
      <div onClick={addInputLine}>wass</div>

      <button type="submit" value="Submit">
        <FaCalendarCheck className={styles.SubmitBtnIcon} />
      </button>
    </form>
  ) : null;
};

export default AddModal;
