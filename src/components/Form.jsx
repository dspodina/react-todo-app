import PropTypes from "prop-types";
import { useState } from "react";
import uuid from "react-uuid";
import "./Form.css";
import { IoMdAdd } from "react-icons/io";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setError(false);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError(true);
      return;
    }

    const todo = {
      id: uuid(),
      text: input,
      completed: false,
    };

    addTodo(todo);
    setInput("");
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <input
          className={`input ${error ? "input-error" : ""}`}
          value={input}
          placeholder="Add a new task"
          type="text"
          onChange={changeHandler}
        />
        <button type="submit"><IoMdAdd /></button>
      </form>
      {error && <div className="error">You need to write something</div>}
    </>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Form;
