import React from "react";
import "./TodoList.css";
const TodoList = (props) => {
  return (
    <div>
      <div className="div3">
        {props.todos.map((item, index) => (
          <div key={index} className="div1">
            <h2>User</h2>
            <hr />
            <h3> Name - {item.task1}</h3>
            <h3> Last Name - {item.task2}</h3>
            <h3> Number - {item.task3}</h3>
            <h3> Email - {item.task4}</h3>
            <button className="btn1" onClick={() => props.handleEdit(item)}>
              EDIT TASK
            </button>
            <button
              className="btn1"
              onClick={() => props.handleDelete(item.id)}
            >
              DELETE TASK
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
