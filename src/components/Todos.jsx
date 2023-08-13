// Todos.jsx
import { useStore } from "./Context/Context";
import TodoItem from "./TodoItem";
const Todos = () => {
  const {todos}= useStore();
  return (
    <div className="todos">
      {todos.length > 0
        ? todos.map((todo) => <TodoItem viewMode={false} key={todo.id} todo={todo} />)
        : ""}
    </div>
  );
};

export default Todos;
