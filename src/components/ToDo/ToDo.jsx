import { useState, useEffect } from "react";
import "./ToDo.css";
import { motion } from "framer-motion";

function ToDo() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [input, setInput] = useState("");

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
    <motion.main
      className="todo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <h2>React To-Do List</h2>

      <div className="input-row">
        <input
          className="todo-input"
          value={input}
          placeholder="Add task"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Micro-interaction Add button */}
        <motion.button
          className="add-btn"
          onClick={addTask}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Add
        </motion.button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            className={task.completed ? "completed" : ""}
            onClick={() => toggleComplete(index)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {task.text}

            {/* Delete button animation */}
            <motion.button
              className="delete-btn"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}
            >
              🗑
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </motion.main>
  );
}

export default ToDo;
