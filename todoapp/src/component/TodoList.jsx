import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((eachitem) => (
        <TodoItem key={eachitem.name} item={eachitem} todos = {todos} setTodos = {setTodos}/>
      ))}
    </div>
  );
}
