// TodoItem.jsx
import { useRef, useState, useEffect } from "react";
import { useStore } from "./Context/Context";

const TodoItem = ({ todo, isEditing, setEditingIndex, onStartEditing }) => {
  const {
    dispatch,
    Actions: { DeleteTodo, EditTodo },
  } = useStore();

  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const field = useRef(null);

  useEffect(() => {
    if (isEditing) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [isEditing]);
  const handleDelete = (e) => {
    setEditMode(false);
    setEditingIndex(null);
    dispatch({ type: DeleteTodo, params: { id: todo.id } });
  };
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

    onStartEditing();
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
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
