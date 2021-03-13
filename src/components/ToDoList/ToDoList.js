import React from "react";
import DeleteModal from "../UI/DeleteModal/DeleteModal";
import ToDoListCard from "./ToDoListCard/ToDoListCard";

const ToDoList = (props) => {
  return props.todos.map((todo, index) => {
    return (
      <React.Fragment key={Math.random()}>
        {todo.showDeleteModal ? (
          <DeleteModal
            delete={() => props.delete(index)}
            closeDeleteModal={() => props.closeDeleteModal(index)}
          />
        ) : null}
        <ToDoListCard
          date={todo.date}
          key={todo.date}
          showDeleteModal={() => props.showDeleteModal(index)}
          openCard={() => props.openCard(index)}
        />
      </React.Fragment>
    );
  });
};

export default ToDoList;
