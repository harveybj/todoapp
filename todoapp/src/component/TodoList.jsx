import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
/**
 * Renders the TodoList component with sorted todos.
 *
 * @param {Array} todos - The list of todos to display.
 * @param {Function} setTodos - A function to update the todos.
 * @return {JSX.Element} The rendered TodoList component.
 */
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
