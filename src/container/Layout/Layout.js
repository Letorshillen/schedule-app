import React, { Component } from "react";
import TodoCards from "../../components/TodoCards/TodoCards";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoListBigCard from "../../components/ToDoList/ToDoListBigCard/ToDoListBigCard";
import AddBtn from "../../components/UI/AddBtn/AddBtn";
import AddModal from "../../components/UI/AddModal/AddModal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

import styles from "./Layout.module.css";

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
      {
        date: 15.03,
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
        date: 13.03,
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
        date: 14.03,
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
    showAddModal: false,
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

  openAddModalHandler = () => {
    this.setState(() => {
      return {
        showAddModal: true,
        showBackdrop: true,
      };
    });
  };

  closeAddModalHandler = () => {
    this.setState(() => {
      return {
        showAddModal: false,
        showBackdrop: false,
      };
    });
  };

  render() {
    let lastToDoItem = this.state.todos[this.state.todos.length - 1];

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
        <div className={styles.ListWrapper}>{todolist}</div>
        {todos}
        <Backdrop showBackdrop={this.state.showBackdrop} />
        <ToDoListBigCard
          date={lastToDoItem.date}
          activity1={lastToDoItem.activity1}
          activity2={lastToDoItem.activity2}
          activity3={lastToDoItem.activity3}
        />
        <AddModal
          closeAddModal={this.closeAddModalHandler}
          showAddModal={this.state.showAddModal}
        />
        <AddBtn openAddModal={this.openAddModalHandler} />
      </React.Fragment>
    );
  }
}
