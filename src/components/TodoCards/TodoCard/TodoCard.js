import React from "react";
import styles from "./TodoCard.module.css";
// import PropTypes from "prop-types";

const TodoCard = (props) => {
  // let todoactivity = [];

  // for (let i = 0; i < props.length; i++) {
  //   todoactivity.push(
  //     <div className={styles.TimeTextContainer}>
  //       <h2>
  //         {props.time1}:{props.time2[i]}
  //       </h2>
  //       <p>{props.activity[i]}</p>
  //     </div>
  //   );
  // }
  return (
    <div
      className={styles.ToDo}
      style={{
        transform: props.show ? "translate(-50%, -50%)" : "translateY(-200vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className={styles.HeadContainer}>
        <div onClick={props.close}>
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
        <h1>{props.date}</h1>
      </div>

      {props.activity.map((_, i) => {
        return (
          <div key={i} className={styles.TimeTextContainer}>
            <h2>
              {props.time1[i]}:{props.time2[i]}
            </h2>
            <p>{props.activity[i]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoCard;
