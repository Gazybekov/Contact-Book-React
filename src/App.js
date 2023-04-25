import React, { useState } from "react";
import EditTodo from "./components/EditTodo/EditTodo";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  const [modal, setModal] = useState(false);
  const handleTask = (newObj) => {
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  };

  const changeStatus = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  const handleEdit = (taskToEdit) => {
    setModal(true);
    setEditTodo(taskToEdit);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleSaveTask = (updatedTask) => {
    const newTodos = todos.map((item) => {
      if (item.id === updatedTask.id) {
        return updatedTask;
      }
      return item;
    });
    setTodos(newTodos);
    handleCloseModal();
  };

  return (
    <div>
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <AddTodo handleTask={handleTask} />
      {modal ? (
        <EditTodo
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
};

export default App;
