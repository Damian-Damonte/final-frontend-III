import { ThemeProvider } from "styled-components";
import React, { useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme } from "./utils/themes"
import { ContextGlobal } from "./utils/global.context";

const Theme = ({ children }) => {

  const [ currentTheme, setCurrentTheme] = useState(lightTheme);
  const { theme } = useContext(ContextGlobal);
  useEffect(() => {
    setCurrentTheme(theme === "lightTheme" ? lightTheme : darkTheme)
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
