//Reducer.jsx
export const Actions = {
  AddTodo: "addtodo",
  DeleteTodo: "deletetodo",
  EditTodo: "edittodo",
};
export default function reducer(state, action) {
  const { AddTodo, DeleteTodo, EditTodo } = Actions;
  switch (action.type) {
    case AddTodo:
      if (action.params.title.trim()) {
        return [
          { id: crypto.randomUUID(), title: action.params.title },
          ...state,
        ];
      }
    case DeleteTodo:
      return state.filter((todo) => todo.id !== action.params.id);
    case EditTodo:
      return state.map((todo) =>
        todo.id === action.params.id
          ? { ...todo, title: action.params.title }
          : todo
      );
    default:
      return state;
  }
}
