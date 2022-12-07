import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Components/utils/global.context";
import Theme from "./Components/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContextProvider>
      <Theme>
        <App />
      </Theme>
    </ContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
