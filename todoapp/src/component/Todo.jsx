import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

/**
 * Renders the Todo component, which displays a list of todos, a form to add new todos,
 * and a footer displaying the number of completed todos and the total number of todos.
 *
 * @return {JSX.Element} The rendered Todo component.
 */
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.isDone === true);
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
