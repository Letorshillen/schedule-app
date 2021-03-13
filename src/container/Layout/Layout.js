import React, { Component } from "react";
import TodoCards from "../../components/TodoCards/TodoCards";
import ToDoList from "../../components/ToDoList/ToDoList";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

export default class Layout extends Component {
  state = {
    todos: [
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
        showDeleteModal: false,
      },
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
        showDeleteModal: false,
      },
      {
        date: 12.03,
        activity1: "loremteasjudwaudbfuawbloremtea",
        activity2: "lorem",
        activity3: "lorem",
        activity4: "lorem",
        activity5: "lorem",
        activity6: "lorem",
        activity7: "lorem",
        showToDo: false,
        showDeleteModal: false,
      },
    ],
    showBackdrop: false,
  };

  closeToDoCardHandler = (todoIndex) => {
    const todo = {
      ...this.state.todos[todoIndex],
    };

    todo.showToDo = false;

    const todos = [...this.state.todos];
    todos[todoIndex] = todo;
    this.setState(() => {
      return {
        todos: todos,
        showBackdrop: false,
      };
    });
  };

  openToDoCardHandler = (todoIndex) => {
    const todo = {
      ...this.state.todos[todoIndex],
    };

    todo.showToDo = true;

    const todos = [...this.state.todos];
    todos[todoIndex] = todo;
    this.setState(() => {
      return {
        todos: todos,
        showBackdrop: true,
      };
    });
  };

  showDeleteModalHandler = (todoIndex) => {
    const todo = {
      ...this.state.todos[todoIndex],
    };

    todo.showDeleteModal = true;

    const todos = [...this.state.todos];
    todos[todoIndex] = todo;
    this.setState(() => {
      return {
        todos: todos,
        showBackdrop: true,
      };
    });
  };

  closeDeleteModalHandler = (todoIndex) => {
    const todo = {
      ...this.state.todos[todoIndex],
    };

    todo.showDeleteModal = false;

    const todos = [...this.state.todos];
    todos[todoIndex] = todo;
    this.setState(() => {
      return {
        todos: todos,
        showBackdrop: false,
      };
    });
  };

  deleteListCardHandler = (todoIndex) => {
    const todos = [...this.state.todos];
    todos.splice(todoIndex, 1);
    this.setState(() => {
      return {
        todos: todos,
        showBackdrop: false,
      };
    });
  };

  render() {
    let todos = null;
    todos = (
      <TodoCards todos={this.state.todos} close={this.closeToDoCardHandler} />
    );

    let todolist = null;
    todolist = (
      <ToDoList
        todos={this.state.todos}
        openCard={this.openToDoCardHandler}
        delete={this.deleteListCardHandler}
        showDeleteModal={this.showDeleteModalHandler}
        closeDeleteModal={this.closeDeleteModalHandler}
      />
    );

    return (
      <React.Fragment>
        {todolist}
        {todos}
        <Backdrop showBackdrop={this.state.showBackdrop} />
      </React.Fragment>
    );
  }
}
