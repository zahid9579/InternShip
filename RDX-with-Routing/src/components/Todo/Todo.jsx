import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../../App/store";
import { useState } from "react";
import "./Todo.css"; // Import CSS file

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText(""); // Clear input
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo..."
          className="input"
        />
        <button type="submit" className={`button ${editId ? "update-button" : "add-button"}`}>
          {editId ? "Update" : "Add"} Todo
        </button>
      </form>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() => {
                  setEditId(todo.id);
                  setText(todo.text);
                }}
                className="button edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="button delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
