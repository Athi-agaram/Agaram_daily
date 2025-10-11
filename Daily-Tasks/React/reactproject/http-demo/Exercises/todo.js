import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!task) return;
    setTodos([...todos, task]);
    setTask("");
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>To-Do App</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
