import { createContext, useReducer, useEffect } from "react";
import axios from 'axios'

export const initialState = {theme: "lightTheme", data: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "setData":
      return {
        ...state, data: action.payload
      }
    case "lightTheme":
      return {...state, theme: "lightTheme"};
    case "darkTheme":
      return {...state, theme: "darkTheme"};
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [globalContext, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data => dispatch({type:"setData", payload: data.data}))
  }, []);

  return (
    <ContextGlobal.Provider value={{...globalContext, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;