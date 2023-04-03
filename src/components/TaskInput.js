import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="task-input">
      <h2 className="title">Write your wishlist here </h2>
      <div className="inputDiv">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="btn" onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
