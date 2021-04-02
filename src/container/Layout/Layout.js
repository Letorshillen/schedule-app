import { useState } from "react";
import React from "react";
import TodoCards from "../../components/TodoCards/TodoCards";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoListBigCard from "../../components/ToDoList/ToDoListBigCard/ToDoListBigCard";
import BottomBar from "../../components/UI/BottomBar/BottomBar";
import AddModal from "../../components/UI/AddModal/AddModal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

import styles from "./Layout.module.css";

const Layout = () => {
  const [todos, setTodos] = useState([
    {
      date1: "How",
      date2: "To",
      tasks: [
        {
          time1: "00",
          time2: "00",
          activity: "neue Version",
          mood: 1,
        },
        {
          time1: "01",
          time2: "01",
          activity: "Zeit flexibel einstellbar",
          mood: 2,
        },
        {
          time1: "03",
          time2: "03",
          activity: "unendlich listeneinträge möglich",
          mood: 3,
        },
        {
          time1: "04",
          time2: "04",
          activity: "stimmung während der aktivität jetzt auswählbar",
          mood: 1,
        },
        {
          time1: "05",
          time2: "05",
          activity: "jetzt auch todos editieren",
          mood: 2,
        },
      ],
      showToDo: false,
      showDeleteModal: false,
    },
  ]);
  const [showBackdrop, setBackdrop] = useState(false);
  const [showAddModal, setAddModal] = useState(false);

  React.useEffect(() => {
    const data = localStorage.getItem("My-ToDos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("My-ToDos", JSON.stringify(todos));
  });

  React.useEffect(() => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].showToDo || todos[i].showDeleteModal) {
        setBackdrop(true);
      }
    }
  }, [todos]);

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
    // for (let i = 1; i < todos.length; i++) {
    //   if (
    //     newTodo.date1 === todos[i].date1 &&
    //     newTodo.date2 === todos[i].date2
    //   ) {
    //     alert("Schon ToDo für dieses Datum angelegt");
    //     return;
    //   }
    // }
    setTodos([...todos, newTodo]);
    closeAddModalHandler();
  };

  const addTaskLine = (index) => {
    const todoNew = [...todos];
    todoNew[index].tasks = [
      ...todoNew[index].tasks,
      {
        time1: "",
        time2: "",
        activity: "",
        mood: 0,
      },
    ];
    setTodos(todoNew);
  };

  const removeTaskLine = (index) => {
    if (todos[index].tasks.length < 2) {
      return;
    }

    const todoNew = [...todos];
    todoNew[index].tasks.splice(-1, 1);

    setTodos(todoNew);
  };

  const editItemHandler = (index, editedTodo) => {
    // for (let i = 1; i < todos.length; i++) {
    //   if (
    //     editedTodo.date1 === todos[i].date1 &&
    //     editedTodo.date1 !== todos[index].date1 &&
    //     editedTodo.date2 === todos[i].date2 &&
    //     editedTodo.date2 !== todos[index].date2
    //   ) {
    //     alert("Schon ToDo für dieses Datum angelegt");
    //     return;
    //   }
    // }
    const todoNew = [...todos];
    todoNew[index] = editedTodo;
    setTodos(todoNew);
  };

  const goodMoodhandler = (index) => {
    const todoNew = [...todos];
    todoNew[todoNew.length - 1].tasks[index].mood = 1;
    setTodos(todoNew);
  };

  const neutralMoodhandler = (index) => {
    const todoNew = [...todos];
    todoNew[todoNew.length - 1].tasks[index].mood = 2;
    setTodos(todoNew);
  };

  const badMoodhandler = (index) => {
    const todoNew = [...todos];
    todoNew[todoNew.length - 1].tasks[index].mood = 3;
    setTodos(todoNew);
  };

  let lastToDoItem = todos[todos.length - 1];

  let todosBig = null;
  todosBig = (
    <TodoCards
      todos={todos}
      close={closeToDoCardHandler}
      editSubmit={editItemHandler}
      moodGood={goodMoodhandler}
      moodNeutral={neutralMoodhandler}
      moodBad={badMoodhandler}
      addTaskLine={addTaskLine}
      removeTaskLine={removeTaskLine}
    />
  );

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
      <ToDoListBigCard
        date1={lastToDoItem.date1}
        date2={lastToDoItem.date2}
        tasks={lastToDoItem.tasks}
        moodGood={goodMoodhandler}
        moodNeutral={neutralMoodhandler}
        moodBad={badMoodhandler}
      />
      <AddModal
        onAdd={addNewItemToList}
        closeAddModal={closeAddModalHandler}
        showAddModal={showAddModal}
      />
      <BottomBar openAddModal={openAddModalHandler} />
    </React.Fragment>
  );
};

export default Layout;
