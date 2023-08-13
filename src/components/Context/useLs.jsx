import { useEffect, useReducer, useState } from "react";
const getLocalStorage = (key, initialValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export default function useStateLs(key, initialValue) {
  const [value, setValue] = useState(() => getLocalStorage(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export const useReducerLs = (reducer, key, initial) => {
  const [state, dispatch] = useReducer(reducer, getLocalStorage(key, initial));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};
