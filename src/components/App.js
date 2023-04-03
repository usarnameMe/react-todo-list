import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (inputValue) => {
    if (inputValue.trim() !== "") {
      setTasks([
        ...tasks,
        { name: inputValue, isDone: false, isChecked: false },
      ]);
    }
  };

  const deleteAllTasks = () => setTasks([]);
  const deleteCompletedTasks = () =>
    setTasks(tasks.filter((task) => !task.isDone));

  return (
    <div className="main-container">
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <div className="otherBtns">
        <button onClick={deleteAllTasks}>Delete All Tasks</button>
        <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
      </div>
    </div>
  );
};

export default App;
