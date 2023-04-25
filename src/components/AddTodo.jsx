import React, { useState } from "react";

const AddTodo = (props) => {
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const handleInput1 = (e) => {
    setTask1(e.target.value);
  };

  const handleInput2 = (e) => {
    setTask2(e.target.value);
  };
  const handleInput3 = (e) => {
    setTask3(e.target.value);
  };
  const handleInput4 = (e) => {
    setTask4(e.target.value);
  };
  const handleAdd = () => {
    if (!task1 || !task2 || !task3 || !task4) {
      alert("input is empty");
      return;
    }
    const newTask = {
      task1: task1,
      task2: task2,
      task3: task3,
      task4: task4,
      id: Date.now(),
    };
    props.handleTask(newTask);
    setTask1("");
    setTask2("");
    setTask3("");
    setTask4("");
  };

  return (
    <div className="div2">
      <div>
        <h2>Contact Book</h2>
        <div className="container ">
          <input
            className="inp1"
            type="text"
            placeholder="Name"
            value={task1}
            onChange={handleInput1}
          />
          <input
            className="inp1"
            type="text"
            placeholder="Last Name"
            value={task2}
            onChange={handleInput2}
          />
          <input
            className="inp1"
            type="number"
            placeholder="Number"
            value={task3}
            onChange={handleInput3}
          />
          <input
            className="inp1"
            type="email"
            placeholder="Email"
            value={task4}
            onChange={handleInput4}
          />
          <button className="btn1" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
