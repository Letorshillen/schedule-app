import React from "react";
import styles from "./EditModal.module.css";
import { FaCalendarCheck } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { useForm } from "react-hook-form";

const EditModal = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    let editedTasks = [];

    for (let i = 0; i < data.time1.length; i++) {
      editedTasks[i] = [
        {
          time1: data.time1[i],
          time2: data.time2[i],
          activity: data.activity[i],
          mood: 0,
        },
      ];
    }

    const dataArray = [
      {
        date: data.date,
        tasks: editedTasks,
        showToDo: false,
        showDeleteModal: false,
      },
    ];
    console.log(dataArray);
    console.log(data);
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.AddModal}
    >
      <div className={styles.Header}>
        <div onClick={props.close} className={styles.Arrow}>
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
          defaultValue={props.date}
          ref={register({ required: true })}
          required
        />
      </div>
      {props.tasks.map((task, index) => (
        <div key={index} className={styles.Wrapper}>
          <input
            className={styles.InputTime}
            type="number"
            step="1"
            min="0"
            max="24"
            name={`time1[${index}]`}
            defaultValue={task.time1}
            ref={register({ required: true })}
            required
          />
          <span>:</span>
          <input
            className={styles.InputTime}
            type="number"
            step="1"
            min="0"
            max="60"
            name={`time2[${index}]`}
            defaultValue={task.time2}
            ref={register({ required: true })}
            required
          />
          <textarea
            name={`activity[${index}]`}
            defaultValue={task.activity}
            ref={register}
          />
        </div>
      ))}
      {/* <div className={styles.WrapperTaskBtn}>
        <BiPlus className={styles.Plus} onClick={addInputLine} />
        <BiMinus className={styles.Minus} onClick={removeInputLine} />
      </div> */}

      <button type="submit" value="Submit">
        <FaCalendarCheck className={styles.SubmitBtnIcon} />
      </button>
    </form>
  );
};

export default EditModal;
