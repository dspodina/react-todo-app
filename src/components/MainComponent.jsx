import PropTypes from "prop-types";
import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./MainComponent.css";

const MainComponent = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoData) => {
    setTodos((prev) => [todoData, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main-component">
      <h2>
        ToDo or not ToDo, <span className="h2-span">that is the question!</span>
      </h2>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

MainComponent.propTypes = {};

export default MainComponent;
