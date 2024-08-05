import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.sort((a, b) => {
    if (a.isDone && !b.isDone) {
      return 1;
    } else if (!a.isDone && b.isDone) {
      return -1;
    } else {
      return 0;
    }
  })
  return (
    <div className={styles.list}>
      {sortedTodos.map((eachitem) => (
        <TodoItem key={eachitem.name} item={eachitem} todos = {todos} setTodos = {setTodos}/>
      ))}
    </div>
  );
}
