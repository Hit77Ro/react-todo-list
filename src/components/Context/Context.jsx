// context.jsx
import { createContext, useContext } from "react";

import reducer from "./Reducer";
import { Actions } from "./Reducer";
import { useReducerLs } from "./useLs";

export const StoreProvider = createContext();
export const useStore = () => useContext(StoreProvider);
export const ContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducerLs(reducer, "todos", []);
  return (
    <StoreProvider.Provider value={{ todos, dispatch, Actions }}>
      {children}
    </StoreProvider.Provider>
  );
};
