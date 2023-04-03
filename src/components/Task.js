import React, { useState } from "react";
import "./App.css";

const Task = ({
  task,
  index,
  deleteTask,
  toggleTaskCompletion,
  editTask,
  toggleCheckbox,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleEditButton = () => {
    setIsEditing(true);
  };

  const handleSaveButton = () => {
    editTask(index, newTaskName);
    setIsEditing(false);
  };

  const taskClassNames = isEditing ? "task task-editing" : "task";
  const taskTextClassNames = task.isDone ? "task-completed" : "";

  return (
    <li className={taskClassNames}>
      {isEditing ? (
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      ) : (
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span className={`name ${taskTextClassNames}`}>{task.name}</span>
        </div>
      )}
      <div className="task-buttons">
        {isEditing ? (
          <button className="save-btn" onClick={handleSaveButton}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEditButton}>
            Edit
          </button>
        )}
        <button className="delete-btn" onClick={() => deleteTask(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
