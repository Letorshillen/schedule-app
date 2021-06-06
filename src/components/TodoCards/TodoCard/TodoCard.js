import React from "react";
import styles from "./TodoCard.module.css";
import { IoMdClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import EditModal from "../../UI/EditModal/EditModal";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {
  RiEmotionUnhappyLine,
  RiEmotionLine,
  RiEmotionNormalLine,
} from "react-icons/ri";

const TodoCard = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  const openEditHandler = () => {
    setShowEdit(true);
  };

  const closeEditHandler = () => {
    setShowEdit(false);
  };

  const getTaskIndexNeutral = (index) => {
    const taskIndex = index;
    props.moodNeutral(taskIndex);
  };

  const getTaskIndexGood = (index) => {
    const taskIndex = index;
    props.moodGood(taskIndex);
  };
  const getTaskIndexBad = (index) => {
    const taskIndex = index;
    props.moodBad(taskIndex);
  };

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
          <h1>
            {props.date1}.{props.date2}
          </h1>
          <FiEdit onClick={openEditHandler} className={styles.Edit} />
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
              <Dropdown className={styles.Dropdown}>
                <Dropdown.Toggle
                  className={styles.DropdownButton}
                  variant="success"
                  id="dropdown-basic"
                >
                  {task.mood === 1 ? (
                    <RiEmotionLine />
                  ) : task.mood === 2 ? (
                    <RiEmotionNormalLine />
                  ) : task.mood === 3 ? (
                    <RiEmotionUnhappyLine />
                  ) : (
                    <RiEmotionNormalLine />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.DropdownMenu}>
                  <Dropdown.Item className={styles.DropdownItem}>
                    <RiEmotionLine
                      style={{ color: "#26a249" }}
                      onClick={() => getTaskIndexGood(index)}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.DropdownItem}>
                    <RiEmotionNormalLine
                      style={{ color: "#ff9103" }}
                      onClick={() => getTaskIndexNeutral(index)}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item className={styles.DropdownItem}>
                    <RiEmotionUnhappyLine
                      style={{ color: "#f0291a" }}
                      onClick={() => getTaskIndexBad(index)}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          );
        })}
      </div>
      {showEdit ? (
        <EditModal
          addTaskLine={props.addTaskLine}
          removeTaskLine={props.removeTaskLine}
          date1={props.date1}
          date2={props.date2}
          tasks={props.tasks}
          close={closeEditHandler}
          editSubmit={props.editSubmit}
        />
      ) : null}
    </React.Fragment>
  );
};

export default TodoCard;
