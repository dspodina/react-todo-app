import PropTypes from "prop-types";
import "./Todo.css";
import { MdOutlineDelete } from "react-icons/md";

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
      <MdOutlineDelete className="delete-btn" onClick={() => onDelete(todo.id)} />
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
