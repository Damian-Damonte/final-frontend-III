import { createContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Components/utils/themes";

export const ContextTheme = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "lightTheme":
      localStorage.theme = JSON.stringify(lightTheme);
      return lightTheme;

    case "darkTheme":
      localStorage.theme = JSON.stringify(darkTheme);
      return darkTheme;

    default:
      return state;
  }
};

const initialValue = localStorage.theme
  ? JSON.parse(localStorage.theme)
  : lightTheme;

const ContextThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, initialValue);

  return (
    <ContextTheme.Provider value={{ theme, dispatch }}>
      {/* Para el theme de styled componentes 👇 */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextTheme.Provider>
  );
};

export default ContextThemeProvider;
