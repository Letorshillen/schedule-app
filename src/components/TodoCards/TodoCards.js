import React, { Component } from "react";
import TodoCard from "./TodoCard/TodoCard";

export default class TodoCards extends Component {
  render() {
    return this.props.todos.map((todo, index) => {
      return (
        <TodoCard
          date={todo.date}
          key={todo.date}
          activity={todo.activity}
          time1={todo.time1}
          time2={todo.time2}
          show={todo.showToDo}
          close={() => this.props.close(index)}
        />
      );
    });
  }
}
