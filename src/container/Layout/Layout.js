import { useState } from "react";
import React from "react";
import TodoCards from "../../components/TodoCards/TodoCards";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoListBigCard from "../../components/ToDoList/ToDoListBigCard/ToDoListBigCard";
import AddBtn from "../../components/UI/AddBtn/AddBtn";
import AddModal from "../../components/UI/AddModal/AddModal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

import styles from "./Layout.module.css";

const Layout = () => {
  const [todos, setTodos] = useState([
    {
      date: "How To",
      tasks: [
        {
          time1: "00",
          time2: "00",
          activity: "neue Version",
        },
        {
          time1: "01",
          time2: "01",
          activity: "Zeit flexibel einstellbar",
        },
        {
          time1: "03",
          time2: "03",
          activity: "unendlich listeneinträge möglich",
        },
      ],
      showToDo: false,
      showDeleteModal: false,
    },
  ]);
  const [showBackdrop, setBackdrop] = useState(false);
  const [showAddModal, setAddModal] = useState(false);

  console.log(todos);

  React.useEffect(() => {
    const data = localStorage.getItem("My-ToDos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("My-ToDos", JSON.stringify(todos));
  });

  const closeToDoCardHandler = (todoIndex) => {
    const todo = {
      ...todos[todoIndex],
    };

    todo.showToDo = false;

    const todosNew = [...todos];
    todosNew[todoIndex] = todo;
    setTodos(todosNew);
    setBackdrop(false);
  };

  const openToDoCardHandler = (todoIndex) => {
    const todo = {
      ...todos[todoIndex],
    };

    todo.showToDo = true;

    const todosNew = [...todos];
    todosNew[todoIndex] = todo;
    setTodos(todosNew);
    setBackdrop(true);
  };

  const showDeleteModalHandler = (todoIndex) => {
    const todo = {
      ...todos[todoIndex],
    };

    if (todos.length === 1) {
      alert("create a new ToDo first");
      return;
    }
    todo.showDeleteModal = true;

    const todosNew = [...todos];
    todosNew[todoIndex] = todo;
    setTodos(todosNew);
    setBackdrop(true);
  };

  const closeDeleteModalHandler = (todoIndex) => {
    const todo = {
      ...todos[todoIndex],
    };

    todo.showDeleteModal = false;

    const todosNew = [...todos];
    todosNew[todoIndex] = todo;
    setTodos(todosNew);
    setBackdrop(false);
  };

  const deleteListCardHandler = (todoIndex) => {
    const todosNew = [...todos];

    todosNew.splice(todoIndex, 1);
    setTodos(todosNew);
    setBackdrop(false);
  };

  const openAddModalHandler = () => {
    setBackdrop(true);
    setAddModal(true);
  };

  const closeAddModalHandler = () => {
    setBackdrop(false);
    setAddModal(false);
  };

  const addNewItemToList = (newTodo) => {
    for (let i = 1; i < todos.length; i++) {
      if (newTodo.date === todos[i].date) {
        alert("stop");
        return;
      }
    }
    setTodos([...todos, newTodo]);
    closeAddModalHandler();
  };

  let lastToDoItem = todos[todos.length - 1];

  let todosBig = null;
  todosBig = <TodoCards todos={todos} close={closeToDoCardHandler} />;

  let todolist = null;
  todolist = (
    <ToDoList
      todos={todos}
      openCard={openToDoCardHandler}
      delete={deleteListCardHandler}
      showDeleteModal={showDeleteModalHandler}
      closeDeleteModal={closeDeleteModalHandler}
    />
  );

  return (
    <React.Fragment>
      <div className={styles.ListWrapper}>{todolist}</div>
      {todosBig}
      <Backdrop showBackdrop={showBackdrop} />
      <ToDoListBigCard date={lastToDoItem.date} tasks={lastToDoItem.tasks} />
      <AddModal
        onAdd={addNewItemToList}
        closeAddModal={closeAddModalHandler}
        showAddModal={showAddModal}
      />
      <AddBtn openAddModal={openAddModalHandler} />
    </React.Fragment>
  );
};

export default Layout;
