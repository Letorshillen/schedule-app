import React from "react";
import styles from "./EditModal.module.css";
import { FaCalendarCheck } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";

const EditModal = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let editedTasks = [];

    for (let i = 0; i < data.time1.length; i++) {
      editedTasks[i] = {
        time1: data.time1[i],
        time2: data.time2[i],
        activity: data.activity[i],
        mood: props.mood,
      };
    }

    props.editSubmit({
      date1: data.date1,
      date2: data.date2,
      tasks: editedTasks,
      showToDo: true,
      showDeleteModal: false,
    });
    props.close();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.AddModal}
    >
      <div className={styles.Header}>
        <h1>ToDo ändern</h1>
        <IoMdClose onClick={props.close} className={styles.Close} />
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
          defaultValue={props.date1}
          ref={register({ required: true })}
          required
        />
        <p>.</p>
        <input
          className={styles.InputDate}
          type="number"
          step="1"
          min="1"
          max="12"
          name="date2"
          defaultValue={props.date2}
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
      <div className={styles.WrapperTaskBtn}>
        <AiOutlinePlusCircle
          className={styles.Plus}
          onClick={props.addTaskLine}
        />
        <AiOutlineMinusCircle
          className={styles.Minus}
          onClick={props.removeTaskLine}
        />
      </div>

      <button type="submit" value="Submit">
        <FaCalendarCheck className={styles.SubmitBtnIcon} />
      </button>
    </form>
  );
};

export default EditModal;
