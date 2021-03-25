import React from "react";
import styles from "./ToDoListBigCard.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  RiEmotionHappyLine,
  RiEmotionUnhappyLine,
  RiEmotionLine,
  RiEmotionNormalLine,
} from "react-icons/ri";

const ToDoListBigCard = (props) => {
  return (
    <div className={styles.ToDoListBigCard}>
      <h1>{props.date}</h1>
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
                <RiEmotionHappyLine />
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.DropdownMenu}>
                <Dropdown.Item className={styles.DropdownItem}>
                  <RiEmotionLine
                    style={{ color: "#26a249" }}
                    onClick={() => props.moodGood(index)}
                  />
                </Dropdown.Item>
                <Dropdown.Item className={styles.DropdownItem}>
                  <RiEmotionNormalLine style={{ color: "#ff9103" }} />
                </Dropdown.Item>
                <Dropdown.Item className={styles.DropdownItem}>
                  <RiEmotionUnhappyLine style={{ color: "#f0291a" }} />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoListBigCard;
