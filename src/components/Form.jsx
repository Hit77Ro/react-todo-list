// Form.jsx
import { useRef, useState } from "react";
import { useStore } from "./Context/Context";
const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch, Actions } = useStore();
  const field = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Actions.AddTodo, params: { title: inputValue } });
    setInputValue("");
    field.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={field}
        autoFocus
        required
        value={inputValue}
        maxLength={30}
        type="text"
        onInput={({ target: { value } }) => setInputValue(value)}
        placeholder="Add new Todo"
      />
      <button role="button" type="submit" className="btn">
        add
      </button>
    </form>
  );
};

export default Form;
