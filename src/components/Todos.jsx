// Todos.jsx
import { useState } from "react";
import { useStore } from "./Context/Context";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [editingIndex, setEditingIndex] = useState(null);
  const { todos } = useStore();

  const handleStartEditing = (index) => {
    setEditingIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            setEditingIndex={setEditingIndex}
            todo={todo}
            isEditing={editingIndex === index}
            onStartEditing={() => handleStartEditing(index)}
          />
        ))}
    </div>
  );
};

export default Todos;
