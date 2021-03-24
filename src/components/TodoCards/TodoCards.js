import React, { Component } from "react";
import TodoCard from "./TodoCard/TodoCard";

export default class TodoCards extends Component {
  render() {
    return this.props.todos.map((todo, index) => {
      return (
        <TodoCard
          date={todo.date}
          key={todo.date}
          tasks={todo.tasks}
          show={todo.showToDo}
          close={() => this.props.close(index)}
        />
      );
    });
  }
}
