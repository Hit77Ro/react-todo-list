import { useRef, useState } from "react";
import { useStore } from "./Context/Context";

const TodoItem = ({ todo }) => {
  const {
    dispatch,
    Actions: { DeleteTodo, EditTodo },
  } = useStore();

  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const field = useRef(null);

  const handleEdit = () => {
    if (!editedTitle.trim()) {
      field.current.focus();
      return;
    }

    if (editMode) {
      dispatch({
        type: EditTodo,
        params: { id: todo.id, title: editedTitle },
      });
    }
    setEditMode(!editMode);
  };

  return (
    <div className="todo">
      {editMode ? (
        <input
          ref={field}
          type="text"
          autoFocus
          required
          value={editedTitle}
          onChange={({ target: { value } }) => setEditedTitle(value)}
        />
      ) : (
        <label className="title">{todo.title}</label>
      )}
      <div className="settings">
        <button onClick={handleEdit}>{editMode ? "save" : "edit"}</button>
        <button
          onClick={() =>
            dispatch({ type: DeleteTodo, params: { id: todo.id } })
          }
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
