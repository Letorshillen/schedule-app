import React from "react";
import styles from "./TodoCard.module.css";
import { IoMdClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import EditModal from "../../UI/EditModal/EditModal";
import { useState } from "react";

const TodoCard = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <React.Fragment>
      <div
        className={styles.ToDo}
        style={{
          transform: props.show
            ? "translate(-50%, -50%)"
            : "translateY(-200vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className={styles.HeadContainer}>
          <h1>{props.date}</h1>
          <FiEdit onClick={() => setShowEdit(true)} className={styles.Edit} />
          <IoMdClose onClick={props.close} className={styles.Close} />
        </div>

        {props.tasks.map((task, index) => {
          return (
            <div
              style={{
                backgroundColor:
                  task.mood === 1
                    ? "#26a24950"
                    : task.mood === 2
                    ? "#ff910360"
                    : task.mood === 3
                    ? "#f0291a50"
                    : "white",
              }}
              key={index}
              className={styles.TimeTextContainer}
            >
              <h2>
                {task.time1}:{task.time2}
              </h2>
              <p>{task.activity}</p>
            </div>
          );
        })}
      </div>
      {showEdit ? (
        <EditModal
          date={props.date}
          tasks={props.tasks}
          close={() => setShowEdit(false)}
        />
      ) : null}
    </React.Fragment>
  );
};

export default TodoCard;
