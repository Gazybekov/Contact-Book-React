import React, { useState } from "react";
import "./EditTodo.css";

const EditTodo = (props) => {
  const [item, setItem] = useState(props.editTodo);
  const handleEditInput = (e) => {
    let newObj = {
      ...item,
    };
    newObj.task = e.target.value;
    setItem(newObj);
  };
  return (
    <div>
      <div className="main-modal">
        <div className="inner-modal">
          <div className="close"></div>
          <h2>Edit</h2>
          <input
            type="text"
            onChange={(e) => setItem({ ...item, task1: e.target.value })}
            className="inp-edit inp1"
            value={item.task1}
          />
          <input
            type="text"
            onChange={(e) => setItem({ ...item, task2: e.target.value })}
            className="inp-edit inp1"
            value={item.task2}
          />
          <input
            type="number"
            onChange={(e) => setItem({ ...item, task3: e.target.value })}
            className="inp-edit inp1"
            value={item.task3}
          />
          <input
            type="email"
            onChange={(e) => setItem({ ...item, task4: e.target.value })}
            className="inp-edit inp1"
            value={item.task4}
          />
          <button className="btn1" onClick={() => props.handleSaveTask(item)}>
            save changes
          </button>
          <button className="btn2" onClick={props.handleCloseModal}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
