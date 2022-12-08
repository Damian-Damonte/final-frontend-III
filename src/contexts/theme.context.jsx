import { createContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Components/utils/themes"

export const ContextTheme = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "lightTheme":
      return lightTheme;
    case "darkTheme":
      return darkTheme;
    default:
      return state;
  }
}

const ContextThemeProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, dispatch] = useReducer(reducer, lightTheme);

  return (
    <ContextTheme.Provider value={{theme, dispatch}}>
    {/* Para el theme de styled componentes 👇 */}
      <ThemeProvider theme={theme}> 
      {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  );
};

export default ContextThemeProvider;