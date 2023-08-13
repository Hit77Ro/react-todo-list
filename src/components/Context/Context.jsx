// context.jsx
import { createContext, useContext, useReducer } from "react";

import reducer from "./Reducer";
import { Actions } from "./Reducer";

export const StoreProvider = createContext();
export const useStore = () => useContext(StoreProvider);
export const ContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <StoreProvider.Provider value={{ todos, dispatch, Actions }}>
      {children}
    </StoreProvider.Provider>
  );
};
