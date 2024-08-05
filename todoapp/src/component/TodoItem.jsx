import styles from "./todoitem.module.css";
/**
 * Renders a single todo item with delete and strike-through functionality.
 *
 * @param {Object} props - The properties for the component.
 * @param {Object} props.item - The todo item to render.
 * @param {Array} props.todos - The list of all todo items.
 * @param {Function} props.setTodos - The function to update the list of todo items.
 * @return {JSX.Element} The rendered todo item.
 */
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleStrike(name) {

    setTodos(todos.map((todo) => {
      if (todo.name === name) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    }));
  }

  const classStrike = item.isDone ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
      
        <span className={classStrike} onClick={() => handleStrike(item.name)}>{item.name}</span>
        
      </div>
      <span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </span>
      <hr className={styles.line} />
    </div>
  );
}
