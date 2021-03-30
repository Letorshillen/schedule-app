import React, { Component } from "react";
import TodoCard from "./TodoCard/TodoCard";

export default class TodoCards extends Component {
  render() {
    return this.props.todos.map((todo, index) => {
      return (
        <TodoCard
          date1={todo.date1}
          date2={todo.date2}
          key={index}
          tasks={todo.tasks}
          show={todo.showToDo}
          close={() => this.props.close(index)}
          moodGood={this.props.moodGood}
          moodNeutral={this.props.moodNeutral}
          moodBad={this.props.moodBad}
          addTaskLine={() => this.props.addTaskLine(index)}
          removeTaskLine={() => this.props.removeTaskLine(index)}
          editSubmit={(editedTodo) => this.props.editSubmit(index, editedTodo)}
        />
      );
    });
  }
}
