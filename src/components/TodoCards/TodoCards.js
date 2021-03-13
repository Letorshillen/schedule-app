import React, { Component } from "react";
import TodoCard from "./TodoCard/TodoCard";

export default class TodoCards extends Component {
  render() {
    return this.props.todos.map((todo, index) => {
      return (
        <TodoCard
          date={todo.date}
          key={todo.date}
          activity1={todo.activity1}
          activity2={todo.activity2}
          activity3={todo.activity3}
          activity4={todo.activity4}
          activity5={todo.activity5}
          activity6={todo.activity6}
          activity7={todo.activity7}
          show={todo.showToDo}
          close={() => this.props.close(index)}
        />
      );
    });
  }
}
