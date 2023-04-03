import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };

  const editTask = (index, newName) => {
    const newTasks = [...tasks];
    newTasks[index].name = newName;
    setTasks(newTasks);
  };

  const toggleCheckbox = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isChecked = !newTasks[index].isChecked;
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
          toggleCheckbox={toggleCheckbox}
        />
      ))}
    </ul>
  );
}

export default TaskList;
