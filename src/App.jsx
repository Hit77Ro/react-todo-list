// App.jsx
import Form from "./components/Form";
import { ContextProvider } from "./components/Context/Context";
import Todos from "./components/Todos";

// TodoApp.jsx
export default function App() {
  return (
    <ContextProvider>
      <div className="container">
        <Form />
        <Todos />
      </div>
    </ContextProvider>
  );
}
