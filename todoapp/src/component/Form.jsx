import styles from "./form.module.css";
import { useState } from "react";
/**
 * Renders a form component that allows users to add new todos.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.todos - The array of todos.
 * @param {Function} props.setTodos - The function to update the todos.
 * @return {JSX.Element} The form component.
 */
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", isDone: false});

  /**
   * Handles the form submission event.
   *
   * @param {Event} e - The form submission event.
   * @return {void} This function does not return anything.
   */
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
