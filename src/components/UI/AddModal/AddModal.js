import styles from "./AddModal.module.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

const AddModal = (props) => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [tasks, setTasks] = useState([
    {
      time1: "",
      time2: "",
      activity: "",
      mood: 0,
    },
    {
      time1: "",
      time2: "",
      activity: "",
      mood: 0,
    },
  ]);

  const handleChange = (index, event) => {
    const values = [...tasks];
    values[index][event.target.name] = event.target.value;
    setTasks(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.onAdd({
      date1,
      date2,
      tasks,
      showToDo: false,
      showDeleteModal: false,
    });

    setDate1("");
    setDate2("");
    setTasks([
      {
        time1: "",
        time2: "",
        activity: "",
        mood: 0,
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
        mood: 0,
      },
    ]);
  };

  const removeInputLine = () => {
    if (tasks.length < 2) {
      return;
    }
    const taskNew = [...tasks];

    taskNew.splice(-1, 1);
    setTasks(taskNew);
  };

  return props.showAddModal ? (
    <form autoComplete="off" onSubmit={onSubmit} className={styles.AddModal}>
      <div className={styles.Header}>
        <h2>Neues ToDo</h2>
        <IoMdClose onClick={props.closeAddModal} className={styles.Close} />
      </div>

      <div className={styles.Wrapper}>
        <label>Datum:</label>
        <input
          className={styles.InputDate}
          type="number"
          step="1"
          min="1"
          max="31"
          name="date1"
          value={date1}
          required
          onChange={(e) => setDate1(e.target.value)}
        />
        <p>.</p>
        <input
          className={styles.InputDate}
          type="number"
          step="1"
          min="1"
          max="12"
          maxLength="2"
          name="date2"
          value={date2}
          required
          onChange={(e) => setDate2(e.target.value)}
        />
      </div>
      {tasks.map((task, index) => (
        <div key={index} className={styles.Wrapper}>
          <input
            className={styles.InputTime}
            type="number"
            step="1"
            min="0"
            max="24"
            name="time1"
            value={task.time1}
            required
            onChange={(event) => handleChange(index, event)}
          />
          <span>:</span>
          <input
            className={styles.InputTime}
            type="number"
            step="1"
            min="0"
            max="60"
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
      <div className={styles.WrapperTaskBtn}>
        <AiOutlinePlusCircle className={styles.Plus} onClick={addInputLine} />
        <AiOutlineMinusCircle
          className={styles.Minus}
          onClick={removeInputLine}
        />
      </div>

      <button type="submit" value="Submit">
        <FaCalendarCheck className={styles.SubmitBtnIcon} />
      </button>
    </form>
  ) : null;
};

export default AddModal;
