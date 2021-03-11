import React, { Component } from "react";
import TodoCards from "../TodoCards/TodoCards";

export default class Layout extends Component {
  state = {
    todos: [
      {
        date: 11.03,
        activity1: "loremteasjudwaudbfuawbloremtea",
        activity2: "lorem",
        activity3: "lorem",
        activity4: "lorem",
        activity5: "lorem",
        activity6: "lorem",
        activity7: "lorem",
        showToDo: false,
      },
      {
        date: 9.03,
        activity1: "loremteasjudwaudbfuawbloremtea",
        activity2: "lorem",
        activity3: "lorem",
        activity4: "lorem",
        activity5: "lorem",
        activity6: "lorem",
        activity7: "lorem",
        showToDo: false,
      },
    ],
    showToDo: false,
  };
  render() {
    let todos = null;
    todos = <TodoCards todos={this.state.todos} />;

    return <div>{todos}</div>;
  }
}
