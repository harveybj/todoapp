import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", isDone: false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name: "", isDone: false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({name:e.target.value, isDone: false})}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
