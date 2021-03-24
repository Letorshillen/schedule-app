import styles from "./AddModal.module.css";
import { useState } from "react";

import { FaCalendarCheck } from "react-icons/fa";

const AddModal = (props) => {
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([
    {
      time1: "",
      time2: "",
      activity: "",
    },
    {
      time1: "",
      time2: "",
      activity: "",
    },
  ]);

  const handleChange = (index, event) => {
    const values = [...tasks];
    values[index][event.target.name] = event.target.value;
    setTasks(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert("Add Date");
      return;
    }
    props.onAdd({
      date,
      tasks,
      showToDo: false,
      showDeleteModal: false,
    });

    setDate("");
    setTasks([
      {
        time1: "",
        time2: "",
        activity: "",
      },
    ]);
  };

  const addInputLine = () => {
    setTasks([
      ...tasks,
      {
        time1: "",
        time2: "",
        activity: "",
      },
    ]);
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
      {tasks.map((task, index) => (
        <div key={index} className={styles.Wrapper}>
          <input
            type="number"
            step="1"
            min="0"
            max="24"
            name="time1"
            value={task.time1}
            required
            onChange={(event) => handleChange(index, event)}
          />
          :
          <input
            type="number"
            step="1"
            min="0"
            max="24"
            name="time2"
            value={task.time2}
            required
            onChange={(event) => handleChange(index, event)}
          />
          <textarea
            name="activity"
            value={task.activity}
            onChange={(event) => handleChange(index, event)}
          />
        </div>
      ))}
      <div onClick={addInputLine}>wass</div>

      <button type="submit" value="Submit">
        <FaCalendarCheck className={styles.SubmitBtnIcon} />
      </button>
    </form>
  ) : null;
};

export default AddModal;
