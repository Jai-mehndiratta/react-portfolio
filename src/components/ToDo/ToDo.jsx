import { useState, useEffect } from "react";
import "./ToDo.css";

function ToDo() {
  // Load tasks from localStorage once on mount
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [input, setInput] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleComplete(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addTask();
  }

  return (
    <div className="todo-container">
      <h2>React To-Do List</h2>

      <div className="input-row">
        <input
          className="todo-input"
          value={input}
          placeholder="Add task"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
            onClick={() => toggleComplete(index)}
          >
            {task.text}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent marking complete while clicking delete
                deleteTask(index);
              }}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
