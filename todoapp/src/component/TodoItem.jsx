import styles from "./todoitem.module.css";
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
