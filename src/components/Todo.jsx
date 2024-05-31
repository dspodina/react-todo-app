import PropTypes from "prop-types";
import "./Todo.css";

const Todo = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </div>
      <div className="todo-actions">
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
